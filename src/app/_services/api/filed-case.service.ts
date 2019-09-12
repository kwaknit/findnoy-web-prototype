import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { FiledCase } from '../../_models/filed-case.model';

@Injectable()
export class FiledCaseService extends CRUDService<FiledCase> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'filed-cases') }
}