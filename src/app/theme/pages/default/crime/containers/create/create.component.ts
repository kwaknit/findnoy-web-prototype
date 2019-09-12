import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crime as CrimeFields } from '../../../../../../config/dynamic-form/crime';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';
import { Crime } from '../../../../../../_models/crime.model';
import { CrimeService } from '../../../../../../_services/api/crime.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<Crime> implements OnDestroy {
    constructor(
        api: CrimeService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Crime');
        this.config = CrimeFields;
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
