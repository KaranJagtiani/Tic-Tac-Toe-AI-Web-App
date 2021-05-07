import { TestBed } from '@angular/core/testing';

import { HillClimbingService } from './hill-climbing.service';

describe('HillClimbingService', () => {
  let service: HillClimbingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HillClimbingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
