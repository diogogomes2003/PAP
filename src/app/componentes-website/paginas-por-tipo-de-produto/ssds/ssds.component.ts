import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-ssds',
  templateUrl: './ssds.component.html',
  styleUrls: ['./ssds.component.css']
})
export class SsdsComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('SSDs');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('ssd');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
