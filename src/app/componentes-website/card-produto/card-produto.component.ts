import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modelos/produtos/produto';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { FiltroService } from 'src/app/servicos/filtro/filtro.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() receiver = [];

  listaProdutos: Produto[] = [];

  filtro: any = '';

  constructor(private router: Router, private msg: MessengerService, private produtosService: DadosService, private filtroService: FiltroService) { }

  ngOnInit(): void {
    this.listaProdutos = this.receiver;

    this.msg.receberRemovido().subscribe((produto: Produto) => {
      this.removerAdicionado(produto);
    })

    this.filtroService.receberFiltro().subscribe((filtro: any) => {
      this.pesquisar(filtro);
    })
   }

  open_product = (id: string, nome: string) => {
    this.router.navigate(['/produto', id, nome]);
  }

  adicionarAoCarrinho(produto: Produto) {
    produto.adicionado = true;
    this.msg.enviar(produto);
  }

  removerAdicionado = (produto: any) => {
    for(let i in this.listaProdutos){
      if(produto.idProduto == this.listaProdutos[i].id){
        this.listaProdutos[i].adicionado = false;
        break;
      }
    }
  }

  removerTudo = () => {
    for(let i in this.listaProdutos){
      this.listaProdutos[i].adicionado = false;
    }
  }

  pesquisar = (filtro: any) => {
    this.filtro = filtro;
  }
}


