import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { User } from '../../_models/user.model';
import { CRUDService } from './crud.service';

@Injectable()
export class UserService extends CRUDService<User> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'users') }
}