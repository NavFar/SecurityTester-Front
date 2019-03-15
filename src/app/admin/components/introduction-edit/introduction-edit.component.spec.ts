import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionEditComponent } from './introduction-edit.component';

describe('IntroductionEditComponent', () => {
  let component: IntroductionEditComponent;
  let fixture: ComponentFixture<IntroductionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
