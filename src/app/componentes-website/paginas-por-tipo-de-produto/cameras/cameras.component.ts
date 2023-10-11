import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Câmaras');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('camara');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
