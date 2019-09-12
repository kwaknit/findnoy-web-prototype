import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { UserService } from '../../../../../../_services/api/user.service';
import { User } from '../../../../../../_models/user.model';
import { User as UserFields } from '../../../../../../config/dynamic-form/user';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<User> implements OnInit, OnDestroy {

    constructor(
        api: UserService,
        activatedRoute: ActivatedRoute,
        router: Router,
    ) {
        super(api, activatedRoute, router, 'User');
        this.config = UserFields
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
