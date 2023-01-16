import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-custom-stepper',
  templateUrl: './example-custom-stepper.component.html',
  styleUrls: ['./example-custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: ExampleCustomStepperComponent }],
})
export class ExampleCustomStepperComponent extends CdkStepper {
  public selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
