import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { Produto } from 'src/app/modelos/produtos/produto';
import { DadosService } from 'src/app/servicos/dados/dados.service';

@Component({
  selector: 'app-processadores',
  templateUrl: './processadores.component.html',
  styleUrls: ['./processadores.component.css']
})
export class ProcessadoresComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: DadosService, private title: Title) { 
    this.title.setTitle('Processadores');
  }

  ngOnInit() {
    this.produtosService.loadByType('processador');
    this.listaProdutos = this.produtosService.produtosByType;
  }

}
