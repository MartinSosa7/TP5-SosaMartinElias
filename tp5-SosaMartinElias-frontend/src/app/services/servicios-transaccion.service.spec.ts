import { TestBed } from '@angular/core/testing';

import { ServiciosTransaccionService } from './servicios-transaccion.service';

describe('ServiciosTransaccionService', () => {
  let service: ServiciosTransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosTransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
