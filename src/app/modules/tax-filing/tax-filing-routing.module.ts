import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFilingFormComponent } from '@tax-filing/components/tax-filing-form';
import { TaxFilingLayoutComponent } from '@tax-filing/layouts/tax-filing-layout';

const routes: Routes = [
  {
    path: '',
    component: TaxFilingLayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'tex-filing-form',
            component: TaxFilingFormComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxFilingRoutingModule {}
