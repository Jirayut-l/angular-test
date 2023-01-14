import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFilingLayoutComponent } from './tax-filing-layout.component';

describe('TaxFilingLayoutComponent', () => {
  let component: TaxFilingLayoutComponent;
  let fixture: ComponentFixture<TaxFilingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxFilingLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxFilingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
