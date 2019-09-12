import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject();

    constructor(
        private _api: AuthService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._api.logout()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe(res => this._router.navigate(['auth']));
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
