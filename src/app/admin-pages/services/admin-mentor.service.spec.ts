import { TestBed } from '@angular/core/testing';

import { AdminMentorService } from './admin-mentor.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AdminMentorService', () => {
  let service: AdminMentorService;
  let http:  HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler]
    });
    service = TestBed.inject(AdminMentorService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
