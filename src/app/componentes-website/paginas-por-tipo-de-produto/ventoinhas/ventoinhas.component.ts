import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-ventoinhas',
  templateUrl: './ventoinhas.component.html',
  styleUrls: ['./ventoinhas.component.css']
})
export class VentoinhasComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Ventoínhas');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('ventoinha');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
