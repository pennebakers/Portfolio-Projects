import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMyGradeComponent } from './upload-my-grade.component';

describe('UploadMyGradeComponent', () => {
  let component: UploadMyGradeComponent;
  let fixture: ComponentFixture<UploadMyGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMyGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMyGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
