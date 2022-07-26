import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {FormBuilder, FormsModule } from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: RouterTestingModule;
  let http:HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers:[HttpClient, HttpHandler, FormBuilder],
      imports:[RouterTestingModule, FormsModule]
    })
    .compileComponents();
    router = TestBed.inject(RouterTestingModule);
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
