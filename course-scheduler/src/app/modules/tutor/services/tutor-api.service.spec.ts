import { TestBed } from '@angular/core/testing';

import { TutorApiService } from './tutor-api.service';

describe('TutorApiService', () => {
  let service: TutorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
