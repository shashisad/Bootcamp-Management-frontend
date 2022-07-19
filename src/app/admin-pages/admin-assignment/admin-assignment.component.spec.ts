import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignmentComponent } from './admin-assignment.component';

describe('AdminAssignmentComponent', () => {
  let component: AdminAssignmentComponent;
  let fixture: ComponentFixture<AdminAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
