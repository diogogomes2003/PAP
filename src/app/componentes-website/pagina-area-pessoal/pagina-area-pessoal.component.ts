import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { FiltroService } from 'src/app/servicos/filtro/filtro.service';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';

@Component({
  selector: 'app-pagina-area-pessoal',
  templateUrl: './pagina-area-pessoal.component.html',
  styleUrls: ['./pagina-area-pessoal.component.css']
})
export class PaginaAreaPessoalComponent implements OnInit, OnDestroy {

  listaUtilizadores: any[] = [];
  utilizador: Utilizador | undefined;
  url: string | undefined;

  constructor(
    private title: Title,
    private router: Router, 
    private dadosService: DadosService, 
    private route: ActivatedRoute,
    private msg: MessengerService
    ) { 
      this.title.setTitle('Área Pessoal');
    }

  ngOnInit(): void {
    if(!localStorage.getItem('token') || !localStorage.getItem('email')) {
      this.router.navigate(['/login']);
      for(let i in this.dadosService.produtos) {
        if(this.dadosService.produtos[i].adicionado = true)
          this.dadosService.produtos[i].adicionado = false;
      }
    } else { 
      this.dadosService.getUtilizadores().subscribe(utilizadores => {
      this.msg.enviarRota(this.route.snapshot.url.join(''));
      this.listaUtilizadores = utilizadores;
      this.loadUserByEmail(localStorage.getItem('email'));
    })
    }
  }

  ngOnDestroy() {
    this.msg.enviarRota('');
  }

  editProfile = (id: string) => {
    this.router.navigate(['/editar-perfil', id]);
  }

  logOut = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  loadUserByEmail(email: string | null) {
    for(let i = 0; i < this.listaUtilizadores.length; i++) {
      if(this.listaUtilizadores[i]['email'] == email) {
        this.utilizador = this.listaUtilizadores[i];
        break;
      }
    } 
  }
}
