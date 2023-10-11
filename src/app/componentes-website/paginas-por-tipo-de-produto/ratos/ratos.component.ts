import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-ratos',
  templateUrl: './ratos.component.html',
  styleUrls: ['./ratos.component.css']
})
export class RatosComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Ratos');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('rato');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
