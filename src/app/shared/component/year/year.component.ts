import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from '@shared/constant/constant';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss'],
})
export class YearComponent implements OnInit {
  @Input() Form: FormControl = new FormControl();
  years: number[] = [];
  messageError = Message.messageError;
  ngOnInit(): void {
    this.setYear();
  }

  public setYear(): void {
    const nowYear = new Date().getFullYear();
    for (let i = 2020; i <= nowYear; i++) {
      this.years.push(i);
    }
    this.years.reverse();
  }
}
