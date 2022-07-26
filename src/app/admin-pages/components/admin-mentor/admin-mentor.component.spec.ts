import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMentorComponent } from './admin-mentor.component';

describe('AdminMentorComponent', () => {
  let component: AdminMentorComponent;
  let fixture: ComponentFixture<AdminMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMentorComponent ]
    })
    .compileComponents();
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
