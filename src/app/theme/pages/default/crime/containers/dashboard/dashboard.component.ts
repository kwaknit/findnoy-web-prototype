import { Component, OnInit } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';
import { Crime } from '../../../../../../_models/crime.model';
import { CrimeService } from '../../../../../../_services/api/crime.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<Crime> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: CrimeService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Crimes', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
