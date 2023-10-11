import { Component, NgZone, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicoLoginService } from 'src/app/servicos/servico-login/servico-login.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {


  constructor(private router: Router, private loginService: ServicoLoginService, private zone: NgZone, private title: Title) {
    this.title.setTitle('Iniciar Sessão');
   }

  ngOnInit(): void {
  }

  hide = true;

  utilizador = {
    email: '',
    password: ''
  }
 
  entrar: boolean = false;

  logIn = async() => {
    try {
      const result = await this.loginService.logIn(this.utilizador);
      alert('Login efetuado com sucesso!');

      this.zone.run(() => this.router.navigate(['/']));
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente!');
      console.error(error);
    }
    
  }

  signUp = () => {
    this.router.navigate(['criar-conta']);
  }

}
