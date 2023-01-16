import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleCustomStepperComponent } from './example-custom-stepper.component';

describe('ExampleCustomStepperComponent', () => {
  let component: ExampleCustomStepperComponent;
  let fixture: ComponentFixture<ExampleCustomStepperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleCustomStepperComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ExampleCustomStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
