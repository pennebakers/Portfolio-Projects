import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee101Component } from './employee101.component';

describe('Employee101Component', () => {
  let component: Employee101Component;
  let fixture: ComponentFixture<Employee101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Employee101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
