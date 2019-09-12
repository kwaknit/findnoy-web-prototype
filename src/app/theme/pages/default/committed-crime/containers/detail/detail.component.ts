import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommittedCrime as CommittedCrimeFields } from '../../../../../../config/dynamic-form/committed-crime';
import { GenericDetailPageComponent } from '../../../../../../_components/generic/generic-detail-page.component';
import { FiledCaseService } from '../../../../../../_services/api/filed-case.service';
import { SimpleList } from '../../../../../../_models/base.model';
import { map } from 'lodash';
import { CommittedCrimeService } from '../../../../../../_services/api/committed-crime.service';
import { CrimeService } from '../../../../../../_services/api/crime.service';
import { CommittedCrime } from '../../../../../../_models/committed-crime.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends GenericDetailPageComponent<CommittedCrime> implements OnInit, OnDestroy {

    constructor(
        api: CommittedCrimeService,
        activatedRoute: ActivatedRoute,
        router: Router,
        private filedCaseSvc: FiledCaseService,
        private crimeSvc: CrimeService
    ) {
        super(api, activatedRoute, router, 'Committed Crime');
        this.config = CommittedCrimeFields;
        this.getFiledCaseSimpleList();
        this.getCrimeSimpleList();
    }

    private async getFiledCaseSimpleList() {
        const simpleList: SimpleList[] = await this.filedCaseSvc.getSimpleList().toPromise();

        if (simpleList && simpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'filed_case_id') {
                    config.options = simpleList;
                }
                return config;
            })
        }
    }

    private async getCrimeSimpleList() {
        const simpleList: SimpleList[] = await this.crimeSvc.getSimpleList().toPromise();

        if (simpleList && simpleList.length > 0) {
            this.config = map(this.config, (config) => {
                if (config.name === 'crime_id') {
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
