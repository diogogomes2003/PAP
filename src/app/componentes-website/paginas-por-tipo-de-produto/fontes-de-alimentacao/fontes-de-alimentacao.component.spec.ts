import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontesDeAlimentacaoComponent } from './fontes-de-alimentacao.component';

describe('FontesDeAlimentacaoComponent', () => {
  let component: FontesDeAlimentacaoComponent;
  let fixture: ComponentFixture<FontesDeAlimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontesDeAlimentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontesDeAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
