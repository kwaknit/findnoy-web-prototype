import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthenticationRequest, Session } from '../../_models/auth.model';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public invalidLogin: boolean = false;
    public invaildMessage: string = '';
    public loading: boolean = false;

    private _unsubscribe$ = new Subject();

    constructor(
        private _fb: FormBuilder,
        private _api: AuthService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.onSessionExpired();

        this.form = this._fb.group({
            email_address: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });
    }

    public login() {
        this.loading = true;

        this._api.login(this.form.value as AuthenticationRequest)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe(
            (res) => this._router.navigate(['users']),
            (err: HttpErrorResponse) => {
                this.invalidLogin = true;
                this.loading = false;
                this.invaildMessage = err.error.message;
            },
            () => {
                this.loading = this.invalidLogin = false
            }
            )
    }

    private onSessionExpired() {
        const session: Session = JSON.parse(localStorage.getItem('user_session'));

        if (session) {
            this.invalidLogin = true;
            this.invaildMessage = 'Your session has expired. Please login again.'
            localStorage.clear();
        }
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
