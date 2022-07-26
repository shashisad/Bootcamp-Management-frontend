import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcgComponent } from './ncg.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('NcgListComponent', () => {
  let component: NcgComponent;
  let fixture: ComponentFixture<NcgComponent>;
  let http: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcgComponent ],
      providers:[HttpClient,HttpHandler],
      imports:[FormsModule]
    })
    .compileComponents();
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
