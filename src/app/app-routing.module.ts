import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tex-filing-form',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./modules/tax-filing/tax-filing.module').then(p => p.TaxFilingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
