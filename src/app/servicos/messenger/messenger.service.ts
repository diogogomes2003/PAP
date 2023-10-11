import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produto } from 'src/app/modelos/produtos/produto';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<any>();
  remove = new Subject<any>();
  rota = new Subject<any>();
  utilizador = {};
  lista = [];
  total = 0;

  constructor() { }

  enviar(produto: Produto) {
    this.subject.next(produto);
  }

  receber() {
    return this.subject.asObservable();
  }

  enviarRemovido(produto: any) {
    this.remove.next(produto);
  }

  receberRemovido() {
    return this.remove.asObservable();
  }

  enviarLista(lista: any, total: number) {
    this.lista = lista;
    this.total = total
  }

  receberLista() {
    return this.lista;
  }

  receberTotal() {
    return this.total;
  }

  enviarUtilizador(utilizador: Utilizador) {
    this.utilizador = utilizador;
  }

  receberUtilizador() {
    return this.utilizador;
  }

  enviarRota(rota: string) {
    this.rota.next(rota);
  }

  receberRota() {
    return this.rota.asObservable();
  }
}
