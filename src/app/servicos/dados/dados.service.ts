import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';

import { Produto } from 'src/app/modelos/produtos/produto';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  produtosByType: any[] = [];
  produtos: any[] = [];
  utilizador: any = {};
  utilizadores: Utilizador[] = [];
  requested: boolean = false;
  requestedU: boolean = false;

  constructor(private http: HttpClient) { }

  getProdutos = async() => {
    if(!this.requested) {
      const produtos = this.http.get<Produto[]>(`${api}/produtos`);

      produtos.subscribe(produtos => {
        for(let i = 0; i < produtos.length; i++) {
          this.produtos.push(produtos[i]);
        }
      this.requested = true;
    });
    }
  }

  getUtilizadores = () => {
      return this.http.get<Utilizador[]>(`${api}/users`).pipe();
  }

  loadById = (id: string) => {
    for(let i = 0; i <= this.produtos.length; i++){
      if(this.produtos[i].id === id){
        console.log(this.produtos[i]);
        return this.produtos[i];
      }
    }
  }

  loadByType = (tipo: string) => {
    if(!this.requested) {
      const todosProdutos = this.http.get<Produto[]>(`${api}/produtos`);
      todosProdutos.subscribe(produto => {
        for(let i = 0; i < produto.length; i++) {
          this.produtos.push(produto[i]);
        }
      this.requested = true;
      });
    }

    this.produtosByType = [];

    for(let i = 0; i < this.produtos.length; i++) {
      if(this.produtos[i].tipo === tipo)
        this.produtosByType.push(this.produtos[i]);
    }
  }

  atualizarStock(id: string, produto: object) {
    return this.http.patch<any>(`${api}/produtos/${id}`, produto).pipe(take(1));
  }
}
