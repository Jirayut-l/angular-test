import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxFilingRoutingModule } from './tax-filing-routing.module';
import { TaxFilingLayoutComponent } from './layouts/tax-filing-layout';

@NgModule({
  declarations: [TaxFilingLayoutComponent],
  imports: [CommonModule, TaxFilingRoutingModule],
})
export class TaxFilingModule {}
