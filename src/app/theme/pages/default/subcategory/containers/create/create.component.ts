import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcategory as SubcategoryFields } from '../../../../../../config/dynamic-form/subcategory';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';
import { Subcategory } from '../../../../../../_models/subcategory.model';
import { SubcategoryService } from '../../../../../../_services/api/subcategory.service';
import { SimpleList } from '../../../../../../_models/base.model';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { map } from 'lodash';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<Subcategory> implements OnDestroy {
    constructor(
        api: SubcategoryService,
        activatedRoute: ActivatedRoute,
        router: Router,
        private categorySvc: CategoryService
    ) {
        super(api, activatedRoute, router, 'Subcategory');
        this.config = SubcategoryFields;
        this.getCategorySimpleList();
    }

    private async getCategorySimpleList() {
        const categorySimpleList: SimpleList[] = await this.categorySvc.getSimpleList().toPromise();

        if (categorySimpleList && categorySimpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'category_id') {
                    config.options = categorySimpleList;
                }
                return config;
            })
        }
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
