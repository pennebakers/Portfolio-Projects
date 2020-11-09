import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supervisor101Component } from './supervisor101.component';

describe('Supervisor101Component', () => {
  let component: Supervisor101Component;
  let fixture: ComponentFixture<Supervisor101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Supervisor101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Supervisor101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
