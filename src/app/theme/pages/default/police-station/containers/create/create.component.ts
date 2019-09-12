import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliceStation as PoliceStationFields } from '../../../../../../config/dynamic-form/police-station';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';
import { SimpleList } from '../../../../../../_models/base.model';
import { map } from 'lodash';
import { PoliceStation } from '../../../../../../_models/police-station.model';
import { PoliceStationService } from '../../../../../../_services/api/police-station.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<PoliceStation> implements OnDestroy {
    constructor(
        api: PoliceStationService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Police Station');
        this.config = PoliceStationFields;
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
