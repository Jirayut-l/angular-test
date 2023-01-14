import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFilingReviewComponent } from './text-filing-review.component';

describe('TextFilingReviewComponent', () => {
  let component: TextFilingReviewComponent;
  let fixture: ComponentFixture<TextFilingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextFilingReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFilingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
