import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';

const routes: Routes = [
  {
    path: '',
    component: TaxFilingLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxFilingRoutingModule {}
