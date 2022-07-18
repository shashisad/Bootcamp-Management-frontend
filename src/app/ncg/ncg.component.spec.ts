import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcgComponent } from './ncg.component';

describe('NcgComponent', () => {
  let component: NcgComponent;
  let fixture: ComponentFixture<NcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcgComponent ]
    })
    .compileComponents();
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
