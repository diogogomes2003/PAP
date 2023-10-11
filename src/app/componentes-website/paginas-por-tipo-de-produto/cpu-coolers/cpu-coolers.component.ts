import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-cpu-coolers',
  templateUrl: './cpu-coolers.component.html',
  styleUrls: ['./cpu-coolers.component.css']
})
export class CpuCoolersComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) {
    this.title.setTitle('Coolers');
   }

  ngOnInit(): void {
    this.produtosService.loadByType('cpu-cooler');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
