import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { Crime } from '../../_models/crime.model';

@Injectable()
export class CrimeService extends CRUDService<Crime> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'crimes') }
}