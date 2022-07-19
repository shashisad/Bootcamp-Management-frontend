import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNcgListComponent } from './admin-ncgList.component';

describe('AdminNcgListComponent', () => {
  let component: AdminNcgListComponent;
  let fixture: ComponentFixture<AdminNcgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNcgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNcgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
