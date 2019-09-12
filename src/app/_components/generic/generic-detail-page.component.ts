import { OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { BaseServiceEntity } from "../../_models/base.model";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, takeUntil } from 'rxjs/operators';

declare let swal: any;
declare let mApp: any;

export class GenericDetailPageComponent<T> implements OnInit, OnDestroy {
    public title: string = 'Edit';
    public data: T;
    public config: any[];
    public ID: number;

    protected unsubscribe$ = new Subject<void>();

    constructor(
        protected api: BaseServiceEntity<T>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public header: string
    ) {
        this.ID = this.activatedRoute.snapshot.params.id;
        this.getOne();
    }

    ngOnInit() {
    }

    public getOne(): void {
        this.activatedRoute.params
            .pipe(
            switchMap(data => this.api.getOne(data.id)),
            takeUntil(this.unsubscribe$))
            .subscribe(data => this.data = data);
    }

    public update(model: T): void {
        mApp.block('#m_portlet');
        this.api
            .update(model)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
            (result) => {
                this.data = result.data;
                this.api.success(result.message);
            },
            (error) => {
                mApp.unblock('#m_portlet');
                this.api.error(error);
            },
            () => mApp.unblock('#m_portlet'));
    }

    public delete(id: number) {
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then(res => {
            if (res.value) {
                mApp.block('#m_portlet');
                this.api
                    .delete(id)
                    .pipe(takeUntil(this.unsubscribe$))
                    .subscribe(
                    (data) => this.api.success(data),
                    (error) => {
                        mApp.block('#m_portlet');
                        this.api.error(error);
                    },
                    () => {
                        mApp.block('#m_portlet');
                        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
                    });
            }

            if (res.dismiss) {
                swal("Cancelled!", "It must be hard to delete it!", "success");
            }
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}