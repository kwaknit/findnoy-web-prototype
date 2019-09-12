import { Component, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

declare let $: any;

@Component({
    selector: 'app-form-date',
    templateUrl: './form-date.component.html',
    styleUrls: ['./form-date.component.scss']
})
export class FormDateComponent implements AfterViewInit {
    config;
    group: FormGroup;

    ngAfterViewInit() {
        $('#datepicker').datepicker({
            format: 'yyyy-mm-dd',
            todayHighlight: true
        })
    }
}
