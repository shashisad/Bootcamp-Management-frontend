import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";


describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let router: RouterTestingModule;
  let http:HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [RouterTestingModule ],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
    router = TestBed.inject(RouterTestingModule);
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
