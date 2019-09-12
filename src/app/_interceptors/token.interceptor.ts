import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../_models/auth.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const session: Session = JSON.parse(localStorage.getItem('user_session'));

        if (session) {
            const cloned = request.clone({
                headers: request.headers.set('Authorization', `${session.token_type} ${session.access_token}`)
            });

            return next.handle(cloned);
        }

        return next.handle(request);
    }
}