import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTabsComponent } from './employee-tabs.component';

describe('EmployeeTabsComponent', () => {
  let component: EmployeeTabsComponent;
  let fixture: ComponentFixture<EmployeeTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
