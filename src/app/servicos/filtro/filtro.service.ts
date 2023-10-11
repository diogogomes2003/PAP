import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  filtro = new Subject<any>();

  enviarFiltro = (filtro: any) => {
    this.filtro.next(filtro);
  }

  receberFiltro = () => {
    return this.filtro.asObservable();
  }


  constructor() { }
}
