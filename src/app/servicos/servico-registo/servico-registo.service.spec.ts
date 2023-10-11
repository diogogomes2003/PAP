import { TestBed } from '@angular/core/testing';

import { ServicoRegistoService } from './servico-registo.service';

describe('ServicoRegistoService', () => {
  let service: ServicoRegistoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoRegistoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
