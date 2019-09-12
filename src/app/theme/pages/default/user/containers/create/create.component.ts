import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../../_services/api/user.service';
import { User } from '../../../../../../_models/user.model';
import { User as UserFields } from '../../../../../../config/dynamic-form/user';
import { GenericCreatePageComponent } from '../../../../../../_components/generic/generic-create-page.component';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends GenericCreatePageComponent<User> implements OnDestroy {
    constructor(
        api: UserService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(api, activatedRoute, router, 'User');
        this.config = UserFields
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
