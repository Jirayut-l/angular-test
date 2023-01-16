import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxFilingStepperComponent } from './tax-filing-stepper.component';

describe('TaxFilingStepperComponent', () => {
  let component: TaxFilingStepperComponent;
  let fixture: ComponentFixture<TaxFilingStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxFilingStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxFilingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
