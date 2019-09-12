import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';


@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    year: number;

    constructor() {

    }
    ngOnInit() {
        const date = new Date();
        this.year = date.getFullYear();
    }

}