import { PrefixNot } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAreaPessoalComponent } from './componentes-website/pagina-area-pessoal/pagina-area-pessoal.component';
import { PaginaEditarPerfilComponent } from './componentes-website/pagina-editar-perfil/pagina-editar-perfil.component';
import { PaginaPrincipalComponent } from './componentes-website/pagina-principal/pagina-principal.component';
import { PaginaProdutoComponent } from './componentes-website/pagina-produto/pagina-produto.component';
import { EstruturaPrincipalComponent } from './estrutura-principal/estrutura-principal.component';
import { PaginaLoginComponent } from './componentes-website/login-registo/pagina-login/pagina-login.component';
import { PaginaRegistoComponent } from './componentes-website/login-registo/pagina-registo/pagina-registo.component';
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
import { HddsComponent } from './componentes-website/paginas-por-tipo-de-produto/hdds/hdds.component';
import { SsdsComponent } from './componentes-website/paginas-por-tipo-de-produto/ssds/ssds.component';

const routes: Routes = [
  { 
    path: '', 
    component: EstruturaPrincipalComponent, 
    children: [
      {
        path: '',
        component: PaginaPrincipalComponent,
        data: { title: 'G&S - Página Principal' }
      },
      {
        path: 'produto/:id/:nome',
        component: PaginaProdutoComponent,
        data: { title: ':nome' }
      },
      {
        path: 'area-pessoal',
        component: PaginaAreaPessoalComponent,
        data: { title: 'Área Pessoal' }
      },
      {
        path: 'editar-perfil/:id',
        component: PaginaEditarPerfilComponent,
        data: { title: 'Editar Perfil' }
      },
      {
        path: 'caixas',
        component: CaixasComponent,
        data: { title: 'Caixas' }
      },
      {
        path: 'cameras',
        component: CamerasComponent,
        data: { title: 'Câmaras' }
      },
      {
        path: 'colunas',
        component: ColunasComponent,
        data: { title: 'Colunas' }
      },
      {
        path: 'cpu-coolers',
        component: CpuCoolersComponent,
        data: { title: 'CPU Coolers' }
      },
      {
        path: 'fontes-de-alimentacao',
        component: FontesDeAlimentacaoComponent,
        data: { title: 'Fontes de Alimentação' }
      },
      {
        path: 'hdds',
        component: HddsComponent,
        data: { title: 'HDDs' }
      },
      {
        path: 'ssds',
        component: SsdsComponent,
        data: { title: 'SSDs' }
      },
      {
        path: 'headphones',
        component: HeadphonesComponent,
        data: { title: 'Headphones' }
      },
      {
        path: 'memorias-ram',
        component: MemoriasRamComponent,
        data: { title: 'Memórias RAM' }
      },
      {
        path: 'motherboards',
        component: MotherboardsComponent,
        data: { title: 'Motherboards' }
      },
      {
        path: 'placas-graficas',
        component: PlacasGraficasComponent,
        data: { title: 'Placas Gráficas' }
      },
      {
        path: 'processadores',
        component: ProcessadoresComponent,
        data: { title: 'Processadores' }
      },
      {
        path: 'ratos',
        component: RatosComponent,
        data: { title: 'Ratos' }
      },
      {
        path: 'teclados',
        component: TecladosComponent,
        data: { title: 'Teclados' }
      },
      {
        path: 'ventoinhas',
        component: VentoinhasComponent,
        data: { title: 'Ventoínhas' }
      },
    ], 
  },
  {
    path: 'login',
    component: PaginaLoginComponent,
    data: { title: 'Iniciar Sessão' }
  },
  {
    path: 'criar-conta',
    component: PaginaRegistoComponent,
    data: { title: 'Criar Conta' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
