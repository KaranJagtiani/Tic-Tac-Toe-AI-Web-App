import { TestBed } from '@angular/core/testing';

import { AlphaBetaService } from './alpha-beta.service';

describe('AlphaBetaService', () => {
  let service: AlphaBetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaBetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
