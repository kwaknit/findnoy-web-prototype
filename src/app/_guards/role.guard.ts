import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserInfo } from '../_models/auth.model';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const allowedRoles: number[] = route.data.allowedRoles;
        const currentUser: UserInfo = JSON.parse(localStorage.getItem('user_info')) as UserInfo;

        if (allowedRoles.includes(currentUser.access_type)) return true;

        this._router.navigate(['quizzes']);
        return false
    }
}