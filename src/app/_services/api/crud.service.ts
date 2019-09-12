import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { HttpGetManyResponse, HttpReponseData } from "../../_models/http.model";
import { ApiHandlerService } from "../api-handler.service";
import { SimpleList } from "../../_models/base.model";

export class CRUDService<T> extends BaseService {
    constructor(
        protected _api: ApiHandlerService,
        private _endpoint: string
    ) { super() }

    /**
     * Get a collection of Model
     * @param page 
     */
    getMany(page: number): Observable<HttpGetManyResponse<T>> {
        return this._api.getMany(this._endpoint, page);
    }

    /**
     * Get one Model
     * 
     */
    getOne(id: number): Observable<T> {
        return this._api.get(this._endpoint, id);
    }

    /**
     * Get simplelist of Model
     * 
     */
    getSimpleList(): Observable<SimpleList[]> {
        return this._api.simplelist(this._endpoint);
    }

    /**
     * Create a model
     */
    create(model: T): Observable<HttpReponseData<T>> {
        return this._api.post(this._endpoint, model);
    }

    /**
     * Update a model
     */
    update(model: T): Observable<HttpReponseData<T>> {
        return this._api.put(this._endpoint, model['id'], model);
    }

    /**
     * Delete a model
     */
    delete(id: number): Observable<string> {
        return this._api.delete(this._endpoint, id);
    }
}