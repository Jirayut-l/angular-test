import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxFilingFormComponent } from '@tax-filing/components/tax-filing-form';
import { TaxFilingStepperComponent } from '@tax-filing/components/tax-filing-stepper';
import { TextFilingReviewComponent } from '@tax-filing/components/text-filing-review';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';
import { TaxFilingRoutingModule } from '@tax-filing/tax-filing-routing.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    TaxFilingLayoutComponent,
    TaxFilingFormComponent,
    TextFilingReviewComponent,
    TaxFilingStepperComponent,
  ],
  imports: [
    CommonModule,
    TaxFilingRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    CdkStepperModule,
  ],
})
export class TaxFilingModule {}
