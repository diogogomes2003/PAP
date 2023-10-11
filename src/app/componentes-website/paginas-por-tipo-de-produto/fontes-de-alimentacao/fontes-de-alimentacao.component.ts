import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-fontes-de-alimentacao',
  templateUrl: './fontes-de-alimentacao.component.html',
  styleUrls: ['./fontes-de-alimentacao.component.css']
})
export class FontesDeAlimentacaoComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Fontes de Alimentação');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('fonte');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
