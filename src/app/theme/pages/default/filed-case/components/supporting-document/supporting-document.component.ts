import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ConfigService } from '@ngx-config/core';
import { FiledCaseDocumentService } from '../../../../../../_services/api/filed-case-document.service';
import { FiledCaseDocument } from '../../../../../../_models/filed-case-document.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare let toastr: any;

@Component({
  selector: 'app-supporting-document',
  templateUrl: './supporting-document.component.html',
  styleUrls: ['./supporting-document.component.scss']
})
export class SupportingDocumentComponent implements OnInit, OnDestroy {
  @Input() fileCaseID: number;

  public uploader: FileUploader = null;
  public formGroup: FormGroup;
  public uploading = false;

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
      filed_case_id: this.fileCaseID      
    });

    this.uploader = new FileUploader({
      // url: this.url,
      itemAlias: 'file',
      autoUpload: false,
      // authToken: `Bearer ${JSON.parse(localStorage.getItem('user_session')).access_token}`,
      disableMultipart: false,
      headers: [
          { name: 'Accept', value: 'application/json' }
        ]
    });

    this.uploader.onCompleteItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
        const result = JSON.parse(response);
        toastr.success('Upload Successful')
        this.uploading = false;
        this.uploader.clearQueue();
        this.formGroup.reset({filed_case_id: this.fileCaseID});
    };
  }

  submiForm(formValue: FiledCaseDocument) {    
    this.uploading = true;

    this.api.create(formValue)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        const ID = res.data.id;
        this.uploader.options.url = this.configSvc.getSettings('url') + `/api/v1/filed-case-documents/${ID}/action/upload`;
        console.log(this.uploader);
        this.uploader.uploadAll();
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
