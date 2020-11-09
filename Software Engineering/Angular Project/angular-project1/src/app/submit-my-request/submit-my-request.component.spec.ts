import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMyRequestComponent } from './submit-my-request.component';

describe('SubmitMyRequestComponent', () => {
  let component: SubmitMyRequestComponent;
  let fixture: ComponentFixture<SubmitMyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitMyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitMyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
