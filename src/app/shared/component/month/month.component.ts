import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from '@shared/constant/constant';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent {
  @Input() Form: FormControl = new FormControl();
  messageError = Message.messageError;
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
    { value: '10', text: 'Oct' },
    { value: '11', text: 'Nov' },
    { value: '12', text: 'Dec' },
  ];

  public disabledMonth(indexMonth: number): string {
    // const yearCurrent: number = new Date().getFullYear();
    // const month = this.Form?.value ?? 0;
    // const year = this.Form?.value ?? 0;
    // if (year >= yearCurrent && indexMonth > +month) {
    //   return 'disabled';
    // }
    // return '';
    const monthCurrent: number = new Date().getMonth();
    if (indexMonth > monthCurrent) {
      return 'disabled';
    }
    return '';
  }
}
