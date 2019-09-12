import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { Session } from '../_models/auth.model';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (!this._isAuthenticated()) {
            this._router.navigate(['/auth']);
            return false;
        }

        return true;

    }

    private _isAuthenticated(): boolean {
        const session: Session = JSON.parse(localStorage.getItem('user_session'));

        if (session) {
            return true;
        }

        return false;
    }
}