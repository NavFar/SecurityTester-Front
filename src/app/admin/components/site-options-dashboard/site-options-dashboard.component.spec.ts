import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOptionsDashboardComponent } from './site-options-dashboard.component';

describe('SiteOptionsDashboardComponent', () => {
  let component: SiteOptionsDashboardComponent;
  let fixture: ComponentFixture<SiteOptionsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteOptionsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOptionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
