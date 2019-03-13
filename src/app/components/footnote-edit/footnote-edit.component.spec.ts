import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootnoteEditComponent } from './footnote-edit.component';

describe('FootnoteEditComponent', () => {
  let component: FootnoteEditComponent;
  let fixture: ComponentFixture<FootnoteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootnoteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootnoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
