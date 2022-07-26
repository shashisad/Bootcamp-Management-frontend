import { TestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('LandingPageService', () => {
  let service: LandingPageService;
  let http:  HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({    providers:[HttpClient, HttpHandler]});
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
