import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/modelos/produtos/produto';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  produto: any;

  constructor(private route: ActivatedRoute, private service: DadosService, private msg: MessengerService, private title: Title) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        this.produto = this.service.loadById(id);
        this.title.setTitle(this.produto?.nome);
      }
    );

    this.msg.receberRemovido().subscribe((produto: Produto) => {
      this.removerAdicionado(produto);
    })
  }

  adicionarAoCarrinho(produto: any) {
    produto.adicionado = true;
    this.msg.enviar(produto);
  }

  removerAdicionado = (produto: any) => {
    if(produto.idProduto == this.produto.id){
      this.produto.adicionado = false;
    }
  }
}
