import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/modelos/produtos/produto';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';
import { MatDialog } from '@angular/material/dialog';
import { delay, take } from 'rxjs/operators';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() total = new EventEmitter();

  listaCarrinho: any[] = [];
  listaUtilizadores: any[] = [];
  utilizador: any;

  totalCarrinho = 0;

  abrirConfirmacao() {
    for(let i in this.listaCarrinho) {
      if(this.listaCarrinho[i].quantidade <= 0) {
        this.listaCarrinho[i].quantidade = 1;
      } else if (this.listaCarrinho[i].quantidade >= this.listaCarrinho[i].quantidadeReal) {
        this.listaCarrinho[i].quantidade = this.listaCarrinho[i].quantidadeReal;
      }
    }
    this.msg.enviarLista(this.listaCarrinho, this.totalCarrinho);
    this.confirmacao.open(ConfirmacaoCompra, { disableClose: true });
  }

  constructor(private msg: MessengerService, public confirmacao: MatDialog, private service: DadosService) { }

  ngOnInit() {
    this.msg.receber().subscribe((produto: Produto) => {
      this.adicionarProduto(produto)
    })

    this.service.getUtilizadores().subscribe((utilizadores: any) => {
      this.listaUtilizadores = utilizadores;
      this.loadUserByEmail(localStorage.getItem('email'));
      this.msg.enviarUtilizador(this.utilizador);
    })
  }

  adicionarProduto(produto: Produto) {
    let produtoExiste = false;

    for(let i in this.listaCarrinho) {
      if(this.listaCarrinho[i].idProduto === produto.id) {
        this.listaCarrinho[i].quantidade++
        produtoExiste = true;
        break;
      }
    }

    if (!produtoExiste) {
      this.listaCarrinho.push({
        idProduto: produto.id,
        nomeProduto: produto.nome,
        quantidade: 1,
        preco: produto.preco,
        imagem: produto.imageURL,
        quantidadeReal: produto.quantidade,
        adicionado: true,
      })
    }
    
    this.atualizarPreco();
  }

  removerProduto = (produto: any) => {
    for(let i = 0; i <= this.listaCarrinho.length; i++) {
      if(this.listaCarrinho[i].idProduto === produto.idProduto) {
        this.msg.enviarRemovido(produto);
        this.listaCarrinho.splice(i, 1);
        this.atualizarPreco();
        return;
      }
    }

  }

  alterarQuantidade = (event: any, quantidadeReal: number, quantidade: number) => {
    if (event.target.value < 1) {
      event.target.value = 1;
    } else if (event.target.value > quantidadeReal) {
      event.target.value = quantidadeReal;
    }
    this.atualizarPreco();
  }

  atualizarPreco = () => {
    this.totalCarrinho = 0;

    this.listaCarrinho.forEach(item => {
      if(item.quantidade > item.quantidadeReal) item.quantidade = item.quantidadeReal
      if(item.quantidade <= 0) item.quantidade = 1;
      this.totalCarrinho += (item.quantidade * item.preco);
    })

    this.total.emit(this.totalCarrinho);
  }

  loadUserByEmail(email: string | null) {
    for(let i = 0; i < this.listaUtilizadores.length; i++) {
      if(this.listaUtilizadores[i]['email'] == email) {
        this.utilizador = this.listaUtilizadores[i];
        break;
      }
    } 
  }
}


@Component({
  selector: 'confirmacao-compra',
  templateUrl: 'confirmacao-compra/confirmacao-compra.component.html',
  styleUrls: ['./confirmacao-compra/confirmacao-compra.component.css']
})
export class ConfirmacaoCompra {

  utilizador: any;

  constructor(public finalConfirmacao: MatDialog, private msg: MessengerService) { }

  ngOnInit() {
      this.utilizador = this.msg.receberUtilizador();
  }

  comprar = (form: any) => {
    this.abrirConfirmacao();
  }

  abrirConfirmacao() {
    this.finalConfirmacao.open(FinalConfirmacaoCompra, { disableClose: true });
  }
} 

@Component({
  selector: 'final-confirmacao-compra',
  templateUrl: 'confirmacao-compra/final-confirmacao-compra/final-confirmacao-compra.component.html',
  styleUrls: [
    'confirmacao-compra/confirmacao-compra.component.css',
    'confirmacao-compra/final-confirmacao-compra/final-confirmacao-compra.component.css']
})
export class FinalConfirmacaoCompra {

  listaCompras: any[] = [];
  total: number = 0;
  utilizador: any;

  constructor(public compra: MatDialog, private msg: MessengerService, private service: DadosService, private recuar: MatDialog) { }

  ngOnInit() {
    this.listaCompras = this.msg.receberLista();
    this.total = this.msg.receberTotal();
    this.utilizador = this.msg.receberUtilizador();
  }

  comprar = (form: any) => {
    let erro: boolean = false;
    for(let i = 0; i < this.listaCompras.length; i++) {
      let produto = {
        quantidade: 0
      }
      produto.quantidade = this.listaCompras[i].quantidadeReal - this.listaCompras[i].quantidade;
      this.service.atualizarStock(this.listaCompras[i].idProduto, produto).subscribe(
        error => erro = true
      );
      if(erro)  { alert('Ocorreu um erro. Tente novamente!'); break }
    }

    if(!erro) { this.compra.open(Compra, { disableClose: true })}
  }

} 


@Component({
  selector: 'compra',
  templateUrl: 'confirmacao-compra/final-confirmacao-compra/compra/compra.component.html',
  styleUrls: [
    'confirmacao-compra/confirmacao-compra.component.css',
    'confirmacao-compra/final-confirmacao-compra/compra/compra.component.css']
})
export class Compra {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => window.location.reload(), 3000);
  }
}
