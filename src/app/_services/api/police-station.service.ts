import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { PoliceStation } from '../../_models/police-station.model';

@Injectable()
export class PoliceStationService extends CRUDService<PoliceStation> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'police-stations') }
}