import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../../../../../../_services/api/file.service';
import { File } from '../../../../../../_models/file.model';
import { SharedDataService } from '../../../../../../_services/shared-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<File> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: FileService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Files', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
