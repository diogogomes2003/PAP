import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasGraficasComponent } from './placas-graficas.component';

describe('PlacasGraficasComponent', () => {
  let component: PlacasGraficasComponent;
  let fixture: ComponentFixture<PlacasGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacasGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
