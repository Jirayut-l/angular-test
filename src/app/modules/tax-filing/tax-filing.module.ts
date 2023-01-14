import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';
import { TaxFilingRoutingModule } from '@tax-filing/tax-filing-routing.module';

@NgModule({
  declarations: [TaxFilingLayoutComponent],
  imports: [CommonModule, TaxFilingRoutingModule],
})
export class TaxFilingModule {}
