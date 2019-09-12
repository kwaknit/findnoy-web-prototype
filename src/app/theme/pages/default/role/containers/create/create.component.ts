import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../../../../_models/role.model';
import { RoleService } from '../../../../../../_services/api/role.service';
import { Role as RoleFields } from '../../../../../../config/dynamic-form/role';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<Role> implements OnDestroy {
    constructor(
        api: RoleService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'Role');
        this.config = RoleFields
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
