import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';

/**
 * @title Use strings as inputs
 */
@Component({
  selector: 'datefield-iso-example',
  templateUrl: './datefield-iso-example.html',
  styleUrls: ['./datefield-iso-example.css'],
})
export class DatefieldIsoExampleComponent {
  inputString = '2020-01-01';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      requestdate: [''],
    });
    of(1)
      .pipe(timeout(1000))
      .subscribe(() => {
        // @ts-ignore
        this.loginForm
          .get('requestdate')
          .patchValue(this.formatDate(new Date()));
      });
  }

  // @ts-ignore
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}

/**  Copyright ALLIANZ 2023 */
