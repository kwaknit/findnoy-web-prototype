import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { Category as CategoryFields } from '../../../../../../config/dynamic-form/category';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';
import { Category } from '../../../../../../_models/category.model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<Category> implements OnDestroy {
    constructor(
        api: CategoryService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Category');
        this.config = CategoryFields
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
