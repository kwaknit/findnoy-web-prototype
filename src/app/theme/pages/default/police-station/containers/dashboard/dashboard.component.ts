import { Component, OnInit } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';
import { PoliceStation } from '../../../../../../_models/police-station.model';
import { PoliceStationService } from '../../../../../../_services/api/police-station.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<PoliceStation> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: PoliceStationService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Police Stations', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
