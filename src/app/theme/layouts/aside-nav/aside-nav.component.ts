import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: 'app-aside-nav',
    templateUrl: './aside-nav.component.html',
    styleUrls: ['./aside-nav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    ngAfterViewInit() {

        mLayout.initAside();

    }

}