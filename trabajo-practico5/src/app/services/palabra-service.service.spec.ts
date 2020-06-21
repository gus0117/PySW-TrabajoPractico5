import { TestBed } from '@angular/core/testing';

import { PalabraServiceService } from './palabra-service.service';

describe('PalabraServiceService', () => {
  let service: PalabraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
