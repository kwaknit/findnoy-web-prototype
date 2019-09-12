import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-number',
    templateUrl: './form-number.component.html',
    styleUrls: ['./form-number.component.scss']
})
export class FormNumberComponent {
    config;
    group: FormGroup;

    formatNumber(val: string, control: string) {
        const toIntVal = +val.replace(/[^0-9.]/g, '');
        const formattedVal = toIntVal.toLocaleString('en', { maximumSignificantDigits: 21 });

        this.group.controls[control].setValue(formattedVal);
    }
}
