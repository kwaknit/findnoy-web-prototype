import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { File } from '../../_models/file.model';
import { Observable } from 'rxjs';

@Injectable()
export class FileService extends CRUDService<File> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'files') }

    deleteFile(id: number): Observable<string> {
        return this._api.customDelete(`${this._api.API_ROOT}/api/v1/files/${id}/action/delete`);
    }
}