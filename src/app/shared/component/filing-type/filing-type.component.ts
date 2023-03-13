import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss'],
})
export class FilingTypeComponent implements OnInit {
  @Input() Form: FormControl = new FormControl();
  form: FormControl = new FormControl();

  ngOnInit(): void {
    this.form = this.Form;
  }
}
