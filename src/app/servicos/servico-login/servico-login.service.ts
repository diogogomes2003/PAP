import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoLoginService {

  constructor(private router: Router, private http: HttpClient) { }

  logado: boolean = false;

  logIn = async (conta: any) => {
    const result = await this.http.post<any>(`${api}/users/login`, conta).toPromise();
    if(result && result.token) {
      localStorage.setItem('token', result?.token);
      localStorage.setItem('email', conta?.email);
      return true;
    }

    return false;
  }
}
