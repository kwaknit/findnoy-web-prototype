import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../../../../_models/role.model';
import { RoleService } from '../../../../../../_services/api/role.service';
import { SharedDataService } from '../../../../../../_services/shared-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<Role> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: RoleService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Roles', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
