import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBreadcrumbComponent } from './side-breadcrumb.component';

describe('SideBreadcrumbComponent', () => {
  let component: SideBreadcrumbComponent;
  let fixture: ComponentFixture<SideBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
