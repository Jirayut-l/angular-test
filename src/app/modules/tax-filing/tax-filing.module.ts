import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';
import { TaxFilingRoutingModule } from '@tax-filing/tax-filing-routing.module';
import { TaxFilingFormComponent } from '@tax-filing/components/tax-filing-form';
import { TextFilingReviewComponent } from './components/text-filing-review/text-filing-review.component';

@NgModule({
  declarations: [TaxFilingLayoutComponent, TaxFilingFormComponent, TextFilingReviewComponent],
  imports: [CommonModule, TaxFilingRoutingModule],
})
export class TaxFilingModule {}
