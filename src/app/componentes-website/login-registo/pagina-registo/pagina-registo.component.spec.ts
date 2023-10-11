import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistoComponent } from './pagina-registo.component';

describe('PaginaRegistoComponent', () => {
  let component: PaginaRegistoComponent;
  let fixture: ComponentFixture<PaginaRegistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
