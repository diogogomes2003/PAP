import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.css']
})
export class TecladosComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Teclados');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('teclado');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
