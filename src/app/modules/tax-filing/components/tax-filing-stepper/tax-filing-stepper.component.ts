import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-filing-stepper',
  templateUrl: './tax-filing-stepper.component.html',
  styleUrls: ['./tax-filing-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: TaxFilingStepperComponent }],
})
export class TaxFilingStepperComponent extends CdkStepper {
  public selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
