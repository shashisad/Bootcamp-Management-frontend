import { TestBed } from '@angular/core/testing';

import { NcgService } from './ncg.service';

describe('NcgService', () => {
  let service: NcgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
