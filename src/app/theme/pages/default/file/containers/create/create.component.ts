import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../../../../../../_services/api/file.service';
import { File as FileFields } from '../../../../../../config/dynamic-form/file';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';
import { File } from '../../../../../../_models/file.model';
import { SimpleList } from '../../../../../../_models/base.model';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { UserService } from '../../../../../../_services/api/user.service';
import { map } from 'lodash';
import { SubcategoryService } from '../../../../../../_services/api/subcategory.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<File> implements OnDestroy {
    constructor(
        api: FileService,
        activatedRoute: ActivatedRoute,
        router: Router,
        private categorySvc: CategoryService,
        private subcategorySvc: SubcategoryService,
        private userSvc: UserService
    ) {
        super(api, activatedRoute, router, 'File');
        this.config = FileFields;
        this.getCategorySimpleList();
        this.getSubcategorySimpleList();
        this.getUserSimpleList();
    }

    ngOnDestroy() {
        super.ngOnDestroy()
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

    private async getSubcategorySimpleList() {
        const subcategorySimpleList: SimpleList[] = await this.subcategorySvc.getSimpleList().toPromise();

        if (subcategorySimpleList && subcategorySimpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'subcategory_id') {
                    config.options = subcategorySimpleList;
                }
                return config;
            })
        }
    }

    private async getUserSimpleList() {
        const userSimpleList: SimpleList[] = await this.userSvc.getSimpleList().toPromise();

        if (userSimpleList && userSimpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'user_id') {
                    config.options = userSimpleList;
                }
                return config;
            })
        }
    }
}
