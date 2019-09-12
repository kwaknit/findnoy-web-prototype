import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { BaseServiceEntity } from "../../_models/base.model";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { HttpReponseData } from "../../_models/http.model";

declare let mApp: any;

export class GenericCreatePageComponent<T> implements OnDestroy {
    public submitted: boolean = false;
    public title: string = 'New';
    public config: any[];

    protected unsubscribe$ = new Subject<void>();

    constructor(
        protected api: BaseServiceEntity<T>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public header: string
    ) { }

    public create(model: T): void {
        mApp.block('#m_portlet');

        let data: T;
        this.api
            .create(model)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
            (result: HttpReponseData<T>) => {
                data = result.data;
                this.api.success(result.message);
            },
            (error) => {
                mApp.unblock('#m_portlet');
                this.api.error(error)
            },
            () => {
                mApp.unblock('#m_portlet');
                this.router.navigate(['../detail', data['id']], { relativeTo: this.activatedRoute });
            }
            );
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
