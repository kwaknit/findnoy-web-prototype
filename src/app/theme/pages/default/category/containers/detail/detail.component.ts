import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../../../../_models/category.model';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { Category as CategoryFields } from '../../../../../../config/dynamic-form/category';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<Category> implements OnInit, OnDestroy {

    constructor(
        api: CategoryService,
        activatedRoute: ActivatedRoute,
        router: Router,
    ) {
        super(api, activatedRoute, router, 'Category');
        this.config = CategoryFields
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
