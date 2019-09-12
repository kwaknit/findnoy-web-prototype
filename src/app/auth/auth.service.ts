import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../_services/api-handler.service';
import { tap, shareReplay } from 'rxjs/operators';
import { AuthenticationResponse, Unauthenticated, AuthenticationRequest } from '../_models/auth.model';
import * as moment from "moment";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private _api: ApiHandlerService,
    ) { }

    public login(params: AuthenticationRequest): Observable<AuthenticationResponse | Unauthenticated> {
        return this._api.post('auth/login', params)
            .pipe(
            tap((res) => this.setSession(res)),
            shareReplay()
            )
    }

    public logout(): Observable<Unauthenticated> {
        return this._api.post('auth/logout', {})
            .pipe(
            tap((res) => this.revokeSession()),
            shareReplay()
            )
    }

    private setSession(authResult: AuthenticationResponse) {
        const expiresAt = moment().add(authResult.user_session.expires_in, 'second');
        authResult.user_session.expires_in = expiresAt.valueOf();

        localStorage.setItem('user_info', JSON.stringify(authResult.user_info));
        localStorage.setItem('user_session', JSON.stringify(authResult.user_session));
    }

    private revokeSession() {
        localStorage.removeItem('user_info');
        localStorage.removeItem('user_session');
    }
}
