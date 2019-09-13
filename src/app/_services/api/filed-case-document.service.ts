import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { FiledCaseDocument } from '../../_models/filed-case-document.model';

@Injectable()
export class FiledCaseDocumentService extends CRUDService<FiledCaseDocument> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'filed-case-documents') }
}