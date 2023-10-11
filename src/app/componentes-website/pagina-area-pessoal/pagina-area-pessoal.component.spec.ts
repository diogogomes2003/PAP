import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAreaPessoalComponent } from './pagina-area-pessoal.component';

describe('PaginaAreaPessoalComponent', () => {
  let component: PaginaAreaPessoalComponent;
  let fixture: ComponentFixture<PaginaAreaPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAreaPessoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAreaPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
