import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-memorias-ram',
  templateUrl: './memorias-ram.component.html',
  styleUrls: ['./memorias-ram.component.css']
})
export class MemoriasRamComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Memórias RAM');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('ram');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
