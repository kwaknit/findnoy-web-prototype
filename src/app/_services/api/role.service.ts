import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';
import { CRUDService } from './crud.service';
import { Role } from '../../_models/role.model';

@Injectable()
export class RoleService extends CRUDService<Role> {
    constructor(
        private api: ApiHandlerService,
    ) { super(api, 'roles') }

    /**
     * Add a role
     * 
     * @param userID 
     * @param roleID 
     */
    public addRole(userID: number, roleID: number) {
        return this.api.customPost(`${this.api.API_ROOT}/api/v1/users/${userID}/action/linkrole/${roleID}`);
    }

    /**
     * Delete a role
     */
    public deleteRole(userID: number, roleID: number) {
        return this.api.customDelete(`${this.api.API_ROOT}/api/v1/users/${userID}/action/unlinkrole/${roleID}`);
    }
}