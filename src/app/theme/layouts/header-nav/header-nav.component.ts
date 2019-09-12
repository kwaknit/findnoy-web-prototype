import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserInfo } from '../../../_models/auth.model';
declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements AfterViewInit {
    LongName: string = 'User';
    EmailAddress: string = '';

    constructor() {
        const currentUser: UserInfo = JSON.parse(localStorage.getItem('user_info')) as UserInfo;

        if (currentUser) {
            this.LongName = `${currentUser.first_name} ${currentUser.last_name}`;
            this.EmailAddress = currentUser.email_address;
        }
    }

    ngAfterViewInit() {
        mLayout.initHeader();
    }

}