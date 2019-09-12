import { Subject } from 'rxjs';
import { OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceEntity } from '../../_models/base.model';
import { HttpGetManyResponse } from '../../_models/http.model';
import { takeUntil } from 'rxjs/operators';
import { SharedDataService } from '../../_services/shared-data.service';

declare let mApp: any;

export class GenericSearchPageComponent<T> implements OnInit, OnDestroy {
    public selected: T[] = [];
    /**
     * Total count of data
     */
    public total: number = 0;

    /**
     * Current page of the table
     */
    public currentPage: number = 1;

    /**
     * Collection of Model data
     */
    public data: T[] = [];

    /**
     * From Item
     */
    public from: number;

    /**
     * To Page boundary
     */
    public to: number;

    public rowCheckMapper: { id: number, checked: boolean } = <any>{};
    public mapperIDCount: number = 0;

    public isLoading: boolean = false;

    protected unsubscribe$ = new Subject<void>();

    @Output() onDeleteSelection = new EventEmitter<T>();

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public api: BaseServiceEntity<T>,
        public header: string,
        public sharedDataSvc: SharedDataService
    ) { }

    ngOnInit() {
        this.getResults();
    }

    public viewDetail(id: number): void {
        this.router.navigate(['detail', id], { relativeTo: this.activatedRoute })
    }

    private async getResults() {
        this.isLoading = true;
        mApp.block('#m_portlet');
        const result: HttpGetManyResponse<T> = await this.api.getMany(this.currentPage).toPromise();

        if (result && result.total > 0) {
            this.data = result.data;
            this.total = result.total;
            this.currentPage = result.current_page;
            this.from = result.from;
            this.to = result.to;

            this._afterGet();
        }

        this.isLoading = false;
        mApp.unblock('#m_portlet');
    }

    public paginate(page: number) {
        this.currentPage = page;
        this.getResults();
    }

    public get state(): boolean {
        return !this.data && this.isLoading;
    }

    public onIndividualSelect(row: T, $event: Event) {
        this._prevent($event);

        const target: HTMLInputElement = $event.target as HTMLInputElement;

        if (target.checked) {
            this.selected.push(row)
        } else {
            this.selected.splice(this.selected.indexOf(row), 1);
            this.onDeleteSelection.emit(row);
        }

    }

    public onCancel() {
        this.selected = [];
    }

    private _prevent($event: Event) {
        $event.preventDefault();
        $event.stopPropagation();

    }

    private _afterGet() {
        this.sharedDataSvc.getMapperIDs()
            .subscribe((data: number[]) => {
                this.rowCheckMapper = {} as any;
                if (data) {
                    this.mapperIDCount = data.length;
                    this.data.forEach((val) => this.rowCheckMapper[val['id']] = data.includes(val['id']));
                }
            })
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
