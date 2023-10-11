import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-placas-graficas',
  templateUrl: './placas-graficas.component.html',
  styleUrls: ['./placas-graficas.component.css']
})
export class PlacasGraficasComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Placas Gráficas');
  }

  ngOnInit(): void {
    this.produtosService.loadByType('placa-grafica');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
