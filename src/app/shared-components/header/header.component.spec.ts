import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: RouterTestingModule;
  let http:HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent],
      imports: [RouterTestingModule ],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
    router = TestBed.inject(RouterTestingModule);
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
