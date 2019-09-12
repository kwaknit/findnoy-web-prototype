import { Component, OnInit } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';
import { CommittedCrime } from '../../../../../../_models/committed-crime.model';
import { CommittedCrimeService } from '../../../../../../_services/api/committed-crime.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<CommittedCrime> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: CommittedCrimeService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Committed Crimes', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
