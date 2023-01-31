import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tax-filing-form',
  templateUrl: './tax-filing-form.component.html',
  styleUrls: ['./tax-filing-form.component.scss'],
})
export class TaxFilingFormComponent implements OnInit {
  years: number[] = [];
  messageError = 'Please fill your information completely';
  monthList = [
    { value: '01', text: 'Jan' },
    { value: '02', text: 'Feb' },
    { value: '03', text: 'Mar' },
    { value: '04', text: 'Apr' },
    { value: '05', text: 'May' },
    { value: '06', text: 'June' },
    { value: '07', text: 'July' },
    { value: '08', text: 'Aug' },
    { value: '09', text: 'Sep' },
    { value: '010', text: 'Oct' },
    { value: '011', text: 'Nov' },
    { value: '012', text: 'Dec' },
  ];
  form = new FormGroup({
    typeOfFiling: new FormControl('0', Validators.required),
    vatMonth: new FormControl('', Validators.required),
    vatYear: new FormControl('', Validators.required),
    totalTaxable: new FormControl('', Validators.required),
    totalVatRemitted: new FormControl('', Validators.required),
    surcharge: new FormControl({ value: '', disabled: true }),
    penalty: new FormControl({ value: '', disabled: true }),
    totalAmountVat: new FormControl({ value: '', disabled: true }),
  });

  get vatMonth(): FormControl {
    return this.form.controls['vatMonth'];
  }

  get vatYear(): FormControl {
    return this.form.controls['vatYear'];
  }

  get totalTaxable(): FormControl {
    return this.form.controls['totalTaxable'];
  }

  ngOnInit(): void {
    this.setYear();
    this.subscribeTotalTaxableChange();
  }

  public setYear(): void {
    const nowYear = new Date().getFullYear();
    for (let i = 2020; i <= nowYear; i++) {
      this.years.push(i);
    }
    this.years.reverse();
  }

  public disabledMonth(indexMonth: number): string {
    const monthCurrent: number = new Date().getMonth();
    if (indexMonth > monthCurrent) {
      return 'disabled';
    }
    return '';
  }

  public subscribeTotalTaxableChange(): void {
    this.form.controls['totalTaxable'].valueChanges.subscribe(res => {
      const castNumber = Number(res);
      const totalVatRemitted = (castNumber * 0.07).toFixed(2);
      this.form.controls['totalVatRemitted'].setValue(totalVatRemitted);
      const surcharge = (castNumber * 0.01).toFixed(2);
      this.form.controls['surcharge'].setValue(surcharge);
      const penalty = '200.00';
      this.form.controls['penalty'].setValue(penalty.toString());
      const totalAmountVat = Number(totalVatRemitted) + Number(surcharge) + Number(penalty);
      this.form.controls['totalAmountVat'].setValue(totalAmountVat.toFixed(2));
    });
  }

  public setMarkAllAsTouch(): void {
    this.form.markAllAsTouched();
  }
}
