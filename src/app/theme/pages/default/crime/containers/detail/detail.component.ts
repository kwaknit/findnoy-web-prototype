import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crime as CrimeFields } from '../../../../../../config/dynamic-form/crime';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { Crime } from '../../../../../../_models/crime.model';
import { CrimeService } from '../../../../../../_services/api/crime.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<Crime> implements OnInit, OnDestroy {

    constructor(
        api: CrimeService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Crime');
        this.config = CrimeFields;
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
