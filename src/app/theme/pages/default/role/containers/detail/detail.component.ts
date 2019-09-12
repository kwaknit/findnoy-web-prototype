import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../../../../_models/role.model';
import { RoleService } from '../../../../../../_services/api/role.service';
import { Role as RoleFields } from '../../../../../../config/dynamic-form/role';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<Role> implements OnInit, OnDestroy {

    constructor(
        api: RoleService,
        activatedRoute: ActivatedRoute,
        router: Router,
    ) {
        super(api, activatedRoute, router, 'Role');
        this.config = RoleFields
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
