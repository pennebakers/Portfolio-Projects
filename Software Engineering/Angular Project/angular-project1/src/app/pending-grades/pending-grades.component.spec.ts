import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingGradesComponent } from './pending-grades.component';

describe('PendingGradesComponent', () => {
  let component: PendingGradesComponent;
  let fixture: ComponentFixture<PendingGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
