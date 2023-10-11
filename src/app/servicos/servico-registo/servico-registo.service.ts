import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoRegistoService {

  criarConta = (conta: any) => {
    return this.http.post<any>(`${api}/users/signup`, conta);
  }

  constructor(private http: HttpClient) { }
}
