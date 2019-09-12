import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiledCase as FiledCaseFields } from '../../../../../../config/dynamic-form/filed-case';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { FiledCase } from '../../../../../../_models/filed-case.model';
import { FiledCaseService } from '../../../../../../_services/api/filed-case.service';
import { PoliceStationService } from '../../../../../../_services/api/police-station.service';
import { UserService } from '../../../../../../_services/api/user.service';
import { SimpleList } from '../../../../../../_models/base.model';
import { map } from 'lodash';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<FiledCase> implements OnInit, OnDestroy {

    constructor(
        api: FiledCaseService,
        activatedRoute: ActivatedRoute,
        router: Router,
        private policeStationSvc: PoliceStationService,
        private userSvc: UserService
    ) {
        super(api, activatedRoute, router, 'Filed Case');
        this.config = FiledCaseFields;
        this.getPoliceStationSimpleList();
        this.getFieldOfficerSimpleList();
    }

    private async getPoliceStationSimpleList() {
        const simpleList: SimpleList[] = await this.policeStationSvc.getSimpleList().toPromise();

        if (simpleList && simpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'police_station_id') {
                    config.options = simpleList;
                }
                return config;
            })
        }
    }

    private async getFieldOfficerSimpleList() {
        const simpleList: SimpleList[] = await this.userSvc.getSimpleList().toPromise();

        if (simpleList && simpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'assigned_to_user_id') {
                    config.options = simpleList;
                }
                return config;
            })
        }
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
