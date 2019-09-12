import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliceStation as PoliceStationFields } from '../../../../../../config/dynamic-form/police-station';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { PoliceStation } from '../../../../../../_models/police-station.model';
import { PoliceStationService } from '../../../../../../_services/api/police-station.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<PoliceStation> implements OnInit, OnDestroy {

    constructor(
        api: PoliceStationService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Police Station');
        this.config = PoliceStationFields;
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
