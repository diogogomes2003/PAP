import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstruturaPrincipalComponent } from './estrutura-principal/estrutura-principal.component';
import { PaginaPrincipalComponent } from './componentes-website/pagina-principal/pagina-principal.component';
import { CardProdutoComponent } from './componentes-website/card-produto/card-produto.component';
import { RodapeComponent } from './componentes-website/rodape/rodape.component';
import { PaginaProdutoComponent } from './componentes-website/pagina-produto/pagina-produto.component';
import { PaginaAreaPessoalComponent } from './componentes-website/pagina-area-pessoal/pagina-area-pessoal.component';
import { PaginaEditarPerfilComponent } from './componentes-website/pagina-editar-perfil/pagina-editar-perfil.component';
import { ServicoLoginService } from './servicos/servico-login/servico-login.service';
import { PaginaLoginComponent } from './componentes-website/login-registo/pagina-login/pagina-login.component';
import { PaginaRegistoComponent } from './componentes-website/login-registo/pagina-registo/pagina-registo.component';
import { ConfirmarPasswordDirective } from './componentes-website/login-registo/pagina-registo/confirmar-password/confirmar-password.directive';
import { CartComponent } from './componentes-website/cart/cart.component';
import { DadosService } from './servicos/dados/dados.service';
import { MessengerService } from './servicos/messenger/messenger.service';
import { CaixasComponent } from './componentes-website/paginas-por-tipo-de-produto/caixas/caixas.component';
import { CamerasComponent } from './componentes-website/paginas-por-tipo-de-produto/cameras/cameras.component';
import { ColunasComponent } from './componentes-website/paginas-por-tipo-de-produto/colunas/colunas.component';
import { CpuCoolersComponent } from './componentes-website/paginas-por-tipo-de-produto/cpu-coolers/cpu-coolers.component';
import { FontesDeAlimentacaoComponent } from './componentes-website/paginas-por-tipo-de-produto/fontes-de-alimentacao/fontes-de-alimentacao.component';
import { HeadphonesComponent } from './componentes-website/paginas-por-tipo-de-produto/headphones/headphones.component';
import { MemoriasRamComponent } from './componentes-website/paginas-por-tipo-de-produto/memorias-ram/memorias-ram.component';
import { MotherboardsComponent } from './componentes-website/paginas-por-tipo-de-produto/motherboards/motherboards.component';
import { PlacasGraficasComponent } from './componentes-website/paginas-por-tipo-de-produto/placas-graficas/placas-graficas.component';
import { ProcessadoresComponent } from './componentes-website/paginas-por-tipo-de-produto/processadores/processadores.component';
import { RatosComponent } from './componentes-website/paginas-por-tipo-de-produto/ratos/ratos.component';
import { TecladosComponent } from './componentes-website/paginas-por-tipo-de-produto/teclados/teclados.component';
import { VentoinhasComponent } from './componentes-website/paginas-por-tipo-de-produto/ventoinhas/ventoinhas.component';
import { ConfirmacaoCompra } from './componentes-website/cart/cart.component';
import { FinalConfirmacaoCompra } from './componentes-website/cart/cart.component';
import { EditarPerfilService } from './servicos/editar-perfil/editar-perfil.service';
import { HddsComponent } from './componentes-website/paginas-por-tipo-de-produto/hdds/hdds.component';
import { SsdsComponent } from './componentes-website/paginas-por-tipo-de-produto/ssds/ssds.component';

@NgModule({
  declarations: [
    AppComponent,
    EstruturaPrincipalComponent,
    PaginaPrincipalComponent,
    CardProdutoComponent,
    RodapeComponent,
    PaginaProdutoComponent,
    PaginaAreaPessoalComponent,
    PaginaEditarPerfilComponent,
    PaginaLoginComponent,
    PaginaRegistoComponent,
    ConfirmarPasswordDirective,
    CartComponent,
    CaixasComponent,
    CamerasComponent,
    ColunasComponent,
    CpuCoolersComponent,
    FontesDeAlimentacaoComponent,
    HeadphonesComponent,
    MemoriasRamComponent,
    MotherboardsComponent,
    PlacasGraficasComponent,
    ProcessadoresComponent,
    RatosComponent,
    TecladosComponent,
    VentoinhasComponent,
    ConfirmacaoCompra,
    FinalConfirmacaoCompra,
    HddsComponent,
    SsdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [
    DadosService,
    MessengerService,
    ServicoLoginService,
    EditarPerfilService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
