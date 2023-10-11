import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicoRegistoService } from 'src/app/servicos/servico-registo/servico-registo.service';
import { ConfirmarPasswordDirective } from './confirmar-password/confirmar-password.directive';

@Component({
  selector: 'app-pagina-registo',
  templateUrl: './pagina-registo.component.html',
  styleUrls: ['./pagina-registo.component.css']
})
export class PaginaRegistoComponent implements OnInit {

  constructor(private router: Router, private registoService: ServicoRegistoService, private title: Title) {
    this.title.setTitle('Criar Conta');
   }

  ngOnInit(): void {
  }

  hide = true;

  user = {
    FirstName: null,
    LastName: null,
    datanasc: Date,
    sexo: null,
    email: null,
    password: null
  }
 
  entrar: boolean = false;

  logIn = (f: any) => {
    this.router.navigate(['login']);
  }

  signUp = () => {
    console.log(this.user);
    this.user.datanasc.toString();

    this.registoService.criarConta(this.user).subscribe(
      success => { alert('Conta criada com sucesso!'); this.router.navigate(['login']) },
      error => { console.error(error); alert('Ocorreu um erro. Tente novamente.') }
    );
  }
}
