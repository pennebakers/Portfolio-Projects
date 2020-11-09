import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorTabsComponent } from './supervisor-tabs.component';

describe('SupervisorTabsComponent', () => {
  let component: SupervisorTabsComponent;
  let fixture: ComponentFixture<SupervisorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
