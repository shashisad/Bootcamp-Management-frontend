import { TestBed } from '@angular/core/testing';

import { AdminAssignmentService } from '../../services/admin-assignment.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AdminAssignmentService', () => {
  let service: AdminAssignmentService;
  let http : HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler]
    });
    service = TestBed.inject(AdminAssignmentService);
    http =TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
