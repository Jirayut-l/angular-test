import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '@shared/constant/constant';

@Component({
  selector: 'app-tax-filing-form',
  templateUrl: './tax-filing-form.component.html',
  styleUrls: ['./tax-filing-form.component.scss'],
})
export class TaxFilingFormComponent implements OnInit {
  messageError = Message.messageError;
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

  get totalTaxable(): FormControl {
    return this.form.controls['totalTaxable'] as FormControl;
  }

  get typeOfFiling(): FormControl {
    return this.form.controls['typeOfFiling'] as FormControl;
  }

  get month(): FormControl {
    return this.form.controls['vatMonth'] as FormControl;
  }

  get years(): FormControl {
    return this.form.controls['vatYear'] as FormControl;
  }

  ngOnInit(): void {
    this.subscribeTotalTaxableChange();
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
