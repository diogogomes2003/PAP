import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEditarPerfilComponent } from './pagina-editar-perfil.component';

describe('PaginaEditarPerfilComponent', () => {
  let component: PaginaEditarPerfilComponent;
  let fixture: ComponentFixture<PaginaEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEditarPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
