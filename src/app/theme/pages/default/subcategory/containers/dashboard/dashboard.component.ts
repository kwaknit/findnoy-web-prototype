import { Component, OnInit } from '@angular/core';
import { GenericSearchPageComponent } from '../../../../../../_components/generic/generic-search-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../../../../../_services/shared-data.service';
import { Subcategory } from '../../../../../../_models/subcategory.model';
import { SubcategoryService } from '../../../../../../_services/api/subcategory.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends GenericSearchPageComponent<Subcategory> implements OnInit {
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: SubcategoryService,
        public sharedDataSvc: SharedDataService
    ) {
        super(router, activatedRoute, api, 'Subcategories', sharedDataSvc)
    }

    ngOnInit() {
        super.ngOnInit()
    }
}
