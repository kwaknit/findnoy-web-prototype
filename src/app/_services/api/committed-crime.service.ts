import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { CommittedCrime } from '../../_models/committed-crime.model';

@Injectable()
export class CommittedCrimeService extends CRUDService<CommittedCrime> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'committed-crimes') }
}