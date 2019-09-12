import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { Category } from '../../../../../../_models/category.model';
import { SharedDataService } from '../../../../../../_services/shared-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<Category> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: CategoryService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Categories', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
