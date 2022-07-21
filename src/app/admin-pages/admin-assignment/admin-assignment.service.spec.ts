import { TestBed } from '@angular/core/testing';

import { AdminAssignmentService } from '../../services/admin-assignment.service';

describe('AdminAssignmentService', () => {
  let service: AdminAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
