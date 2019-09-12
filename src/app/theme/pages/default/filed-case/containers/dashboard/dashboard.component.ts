import { Component, OnInit } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';
import { FiledCase } from '../../../../../../_models/filed-case.model';
import { FiledCaseService } from '../../../../../../_services/api/filed-case.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<FiledCase> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: FiledCaseService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Filed Cases', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
