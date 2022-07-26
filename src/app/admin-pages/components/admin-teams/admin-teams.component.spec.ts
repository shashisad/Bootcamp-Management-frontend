import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamsComponent } from './admin-teams.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AdminTeamsComponent', () => {
  let component: AdminTeamsComponent;
  let fixture: ComponentFixture<AdminTeamsComponent>;
  let http : HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeamsComponent ],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
    http= TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
