import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessadoresComponent } from './processadores.component';

describe('ProcessadoresComponent', () => {
  let component: ProcessadoresComponent;
  let fixture: ComponentFixture<ProcessadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
