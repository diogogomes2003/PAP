import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaPrincipalComponent } from './estrutura-principal.component';

describe('NavbarComponent', () => {
  let component: EstruturaPrincipalComponent;
  let fixture: ComponentFixture<EstruturaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
