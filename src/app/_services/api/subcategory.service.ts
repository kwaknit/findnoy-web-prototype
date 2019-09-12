import { Injectable } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service';
import { CRUDService } from './crud.service';
import { Subcategory } from '../../_models/subcategory.model';

@Injectable()
export class SubcategoryService extends CRUDService<Subcategory> {
    constructor(
        api: ApiHandlerService,
    ) { super(api, 'subcategories') }
}