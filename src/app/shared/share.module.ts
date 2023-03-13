import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FilingTypeComponent } from '@shared/component/filing-type/filing-type.component';
import { MonthComponent } from '@shared/component/month/month.component';
import { YearComponent } from './component/year/year.component';

@NgModule({
  declarations: [FilingTypeComponent, MonthComponent, YearComponent],
  exports: [FilingTypeComponent, MonthComponent, YearComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ShareModule {}
