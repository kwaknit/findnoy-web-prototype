import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../../../../../../_models/file.model';
import { FileService } from '../../../../../../_services/api/file.service';
import { File as FileFields } from '../../../../../../config/dynamic-form/file';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ConfigService } from '@ngx-config/core';
import { takeUntil } from 'rxjs/operators';
import { SimpleList } from '../../../../../../_models/base.model';
import { map } from 'lodash';
import { CategoryService } from '../../../../../../_services/api/category.service';
import { UserService } from '../../../../../../_services/api/user.service';
import { SubcategoryService } from '../../../../../../_services/api/subcategory.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<File> implements OnInit, OnDestroy {
    public uploader: FileUploader = null;
    public url: string;
    public uploading = false;
    public deleting = false;

    constructor(
        api: FileService,
        activatedRoute: ActivatedRoute,
        router: Router,
        private readonly configSvc: ConfigService,
        private categorySvc: CategoryService,
        private subcategorySvc: SubcategoryService,
        private userSvc: UserService
    ) {
        super(api, activatedRoute, router, 'File');
        this.config = FileFields;
        this.url = configSvc.getSettings('url') + `/api/v1/files/${this.ID}/action/upload`;
        this.getCategorySimpleList();
        this.getSubcategorySimpleList();
        this.getUserSimpleList();
    }

    ngOnInit() {
        super.ngOnInit();
        this.uploader = new FileUploader({
            url: this.url,
            itemAlias: 'file',
            autoUpload: true,
            authToken: `Bearer ${JSON.parse(localStorage.getItem('user_session')).access_token}`,
            disableMultipart: false,
            headers: [
                { name: 'Accept', value: 'application/json' }
            ]
        });

        this.uploader.onProgressItem = (fileItem: FileItem, progress: any) => {
            this.uploading = true;
        }

        this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            const result = JSON.parse(response);
            this.data.file_name = result.data;
            this.uploading = false;
            this.uploader.clearQueue();
        };
    }

    deleteFile() {
        this.deleting = true;
        this.api.deleteFile(this.data.id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
            (res) => console.log(res),
            (err) => console.log(err),
            () => {
                this.deleting = false;
                this.data.file_name = null;
            }
            );
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

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
