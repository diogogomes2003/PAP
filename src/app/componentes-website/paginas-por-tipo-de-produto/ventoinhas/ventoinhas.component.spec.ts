import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentoinhasComponent } from './ventoinhas.component';

describe('VentoinhasComponent', () => {
  let component: VentoinhasComponent;
  let fixture: ComponentFixture<VentoinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentoinhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentoinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
