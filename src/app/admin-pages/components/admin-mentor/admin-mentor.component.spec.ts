import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMentorComponent } from './admin-mentor.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AdminMentorComponent', () => {
  let component: AdminMentorComponent;
  let fixture: ComponentFixture<AdminMentorComponent>;
  let http : HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMentorComponent ],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
    http= TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
