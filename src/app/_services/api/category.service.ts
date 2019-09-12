import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { Category } from '../../_models/category.model';

@Injectable()
export class CategoryService extends CRUDService<Category> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'categories') }
}