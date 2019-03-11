import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageDashboardComponent } from './first-page-dashboard.component';

describe('FirstPageDashboardComponent', () => {
  let component: FirstPageDashboardComponent;
  let fixture: ComponentFixture<FirstPageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
