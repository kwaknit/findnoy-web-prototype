import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ConfigService } from '@ngx-config/core';
import { FiledCaseDocumentService } from '../../../../../../_services/api/filed-case-document.service';
import { FiledCaseDocument, IDocument } from '../../../../../../_models/filed-case-document.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { saveAs } from 'file-saver';

declare let toastr: any;

@Component({
    selector: 'app-supporting-document',
    templateUrl: './supporting-document.component.html',
    styleUrls: ['./supporting-document.component.scss']
})
export class SupportingDocumentComponent implements OnInit, OnDestroy {
    @Input() fileCaseID: number;
    @Input() documents: IDocument[] = [];

    public uploader: FileUploader = null;
    public formGroup: FormGroup;
    public uploading = false;
    public downloading = false;
    public deleting = false;

    private unsubscribe$ = new Subject();

    constructor(
        private _fb: FormBuilder,
        private readonly configSvc: ConfigService,
        private api: FiledCaseDocumentService
    ) {
        // this.url = configSvc.getSettings('url') + `/api/v1/files/${this.ID}/action/upload`;
    }

    ngOnInit() {
        this.formGroup = this._fb.group({
            id: null,
            title: [null, Validators.required],
            filed_case_id: this.fileCaseID,
            file: null
        });

        this.uploader = new FileUploader({
            url: '',
            itemAlias: 'file',
            autoUpload: false,
            // authToken: `Bearer ${JSON.parse(localStorage.getItem('user_session')).access_token}`,
            disableMultipart: false,
            headers: [
                { name: 'Accept', value: 'application/json' }
            ]
        });

        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

        this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            const result = JSON.parse(response);
            toastr.success('Upload Successful');
            this.documents.push({ id: result.data.id, title: result.data.title, filed_case_id: this.fileCaseID } as IDocument);
            this.uploading = false;
            this.uploader.clearQueue();
            this.formGroup.reset({ filed_case_id: this.fileCaseID });
        };
    }

    submiForm(formValue: FiledCaseDocument) {
        this.uploading = true;

        this.api.create(formValue)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => {
                this.uploader.setOptions({ url: this.configSvc.getSettings('url') + `/api/v1/filed-case-documents/${res.data.id}/action/upload` });
                this.uploader.uploadAll();
            })
    }

    async downFile(file: FiledCaseDocument) {
        this.downloading = true;
        const result: Blob | string = await this.api.download(file.id).toPromise();

        if (typeof result !== 'string') {
            saveAs(result, file.title);
        } else if (typeof result === 'string') {
            toastr.error(result);
        }
        this.downloading = false;
    }

    deleteFile(file: FiledCaseDocument) {
        this.deleting = true;
        this.api.delete(file.id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => {
                toastr.success(res);

                const fileIdx: number = this.documents.indexOf(file);
                this.documents.splice(fileIdx, 1);

                this.deleting = false;
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
