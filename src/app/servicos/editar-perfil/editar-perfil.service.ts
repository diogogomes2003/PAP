import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  constructor(private http: HttpClient) { }

  update(id: string, target: any){
    console.log(target);
    return this.http.put<any>(`${api}/users/${id}`, target).pipe(take(1));
  }
}
