import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTicketsComponent } from './formulario-tickets.component';

describe('FormularioTicketsComponent', () => {
  let component: FormularioTicketsComponent;
  let fixture: ComponentFixture<FormularioTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
