import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatosComponent } from './ratos.component';

describe('RatosComponent', () => {
  let component: RatosComponent;
  let fixture: ComponentFixture<RatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
