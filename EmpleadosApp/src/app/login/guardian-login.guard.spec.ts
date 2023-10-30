import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardianLoginGuard } from './guardian-login.guard';

describe('guardianLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardianLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
