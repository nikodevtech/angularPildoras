import { TestBed } from '@angular/core/testing';

import { DataServiceEmpleadosService } from './data-service-empleados.service';

describe('DataServiceEmpleadosService', () => {
  let service: DataServiceEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
