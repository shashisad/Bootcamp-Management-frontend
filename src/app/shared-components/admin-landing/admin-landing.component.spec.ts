import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingComponent } from './admin-landing.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AdminLandingComponent', () => {
  let component: AdminLandingComponent;
  let fixture: ComponentFixture<AdminLandingComponent>;
  let http:HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLandingComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
