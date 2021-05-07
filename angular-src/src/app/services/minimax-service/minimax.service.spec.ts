import { TestBed } from '@angular/core/testing';

import { MinimaxService } from './minimax.service';

describe('MinimaxService', () => {
  let service: MinimaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
