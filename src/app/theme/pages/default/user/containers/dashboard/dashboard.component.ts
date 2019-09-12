import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { User } from '../../../../../../_models/user.model';
import { UserService } from '../../../../../../_services/api/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<User> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: UserService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'User', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
