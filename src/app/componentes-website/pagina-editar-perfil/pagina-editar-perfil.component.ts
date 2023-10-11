import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilizador } from 'src/app/modelos/utilizadores/utilizador';
import { DadosService } from 'src/app/servicos/dados/dados.service';
import { EditarPerfilService } from 'src/app/servicos/editar-perfil/editar-perfil.service';
import { MessengerService } from 'src/app/servicos/messenger/messenger.service';

@Component({
  selector: 'app-pagina-editar-perfil',
  templateUrl: './pagina-editar-perfil.component.html',
  styleUrls: ['./pagina-editar-perfil.component.css']
})
export class PaginaEditarPerfilComponent implements OnInit, OnDestroy {

  listaUtilizadores: any[] = [];
  utilizador: any;
  id: string = '';
  passwordForm: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private dadosService: DadosService,
    private updateService: EditarPerfilService,
    private msg: MessengerService,
    private title: Title
    ) { 
      this.title.setTitle('Editar Perfil');
    }

  ngOnInit(): void {
    this.msg.enviarRota(this.route.snapshot.url.join(''));

    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      for(let i in this.dadosService.produtos) {
        if(this.dadosService.produtos[i].adicionado = true)
          this.dadosService.produtos[i].adicionado = false;
      }
    } else { 
      this.route.params.subscribe(
        (params: any) => {
          this.id = params.id;
        }
      );

      this.dadosService.getUtilizadores().subscribe(utilizadores => {
        this.listaUtilizadores = utilizadores;
        this.loadUserById(this.id);
        this.passwordForm = this.utilizador.password;
      })
    }
  }

  ngOnDestroy(): void {
    this.msg.enviarRota('');
  }

  loadUserById(id: string | null) {
    for(let i = 0; i < this.listaUtilizadores.length; i++) {
      if(this.listaUtilizadores[i]['id'] == id) {
        this.utilizador = this.listaUtilizadores[i];
        console.log(this.utilizador);
        break;
      }
    } 
  }

  editarPerfil = (form: any) => {
    if(this.utilizador?.id) {
      if(form.value.password == '') {
        form.value.password = this.passwordForm;
      }

      let utilizador: Utilizador = {
        email: form.value.email,
        password: form.value.password,
        FirstName: form.value.FirstName,
        LastName: form.value.LastName,
        datanasc: form.value.datanasc,
        sexo: form.value.sexo,
        Contacto: form.value.Contacto,
        pais: form.value.pais,
        distrito: form.value.distrito,
        concelho: form.value.concelho,
        freguesia: form.value.freguesia,
        Morada: form.value.Morada,
        CodigoPostal: form.value.CodigoPostal,
        ncontaban: form.value.ncontaban,
        banco: form.value.banco
      }
      utilizador.datanasc.toString();
      this.updateService.update(this.utilizador.id, utilizador).subscribe(
      success => { alert('Utilizador atualizado com sucesso'); this.msg.enviarUtilizador(utilizador) },
      error => { alert("Ocorreu um erro. Tente novamente!")},
      () => { this.router.navigate(['/area-pessoal']) }
      );
    }
    
  }



}
