import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FiltroService } from '../servicos/filtro/filtro.service';
import { MessengerService } from '../servicos/messenger/messenger.service';

@Component({
  selector: 'app-estrutura-principal',
  templateUrl: './estrutura-principal.component.html',
  styleUrls: ['./estrutura-principal.component.css']
})
export class EstruturaPrincipalComponent implements OnInit { 

  totalCarrinho = 0;
  filtro: any = null;
  url: string | undefined;
  
  constructor(
    private router: Router, 
    private filtroService: FiltroService, 
    private route: ActivatedRoute, 
    private msg: MessengerService
    ) { }

  ngOnInit() {
    this.msg.receberRota().subscribe((rota: any) => {
      this.url = rota;
      console.log(this.url);
    })
   }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  personalArea = () => {
    this.router.navigate(['/area-pessoal']);
  }

  panelOpenState = false;

  receberTotal = (total: any) => {
    this.totalCarrinho = total;
  }

  enviarFiltro = (filtro: any) => {
    this.filtroService.enviarFiltro(filtro);
  }
}
