import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tutorGuardGuard } from './tutor-guard.guard';

describe('tutorGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tutorGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
