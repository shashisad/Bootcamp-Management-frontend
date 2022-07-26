import { TestBed } from '@angular/core/testing';

import { AdminMentorService } from './admin-mentor.service';

describe('AdminMentorService', () => {
  let service: AdminMentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
