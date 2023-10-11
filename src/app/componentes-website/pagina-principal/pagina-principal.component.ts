import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modelos/produtos/produto';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';
import { ServicoLoginService } from 'src/app/servicos/servico-login/servico-login.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  listaProdutos: Produto[] = [];
  utilizadores: any;

  constructor(private msg: MessengerService,
    private loginService: ServicoLoginService, 
    private produtosService: DadosService,
    private title: Title) { 
      this.title.setTitle('G&S - Página Principal');
    }

  ngOnInit(): void {
    this.produtosService.getProdutos();
    this.listaProdutos = this.produtosService.produtos;
  }

  
}
