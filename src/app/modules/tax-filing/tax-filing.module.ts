import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';
import { TaxFilingRoutingModule } from '@tax-filing/tax-filing-routing.module';
import { TaxFilingFormComponent } from '@tax-filing/components/tax-filing-form';
import { TextFilingReviewComponent } from '@tax-filing/components/text-filing-review';

@NgModule({
  declarations: [TaxFilingLayoutComponent, TaxFilingFormComponent, TextFilingReviewComponent],
  imports: [CommonModule, TaxFilingRoutingModule, ReactiveFormsModule],
})
export class TaxFilingModule {}
