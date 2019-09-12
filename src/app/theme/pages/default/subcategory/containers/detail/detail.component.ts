import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { Subcategory as SubcategoryFields } from '../../../../../../config/dynamic-form/subcategory';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { Subcategory } from '../../../../../../_models/subcategory.model';
import { SubcategoryService } from '../../../../../../_services/api/subcategory.service';
import { SimpleList } from '../../../../../../_models/base.model';
import { map } from 'lodash';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<Subcategory> implements OnInit, OnDestroy {

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

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
