import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { ConfigService } from '@ngx-config/core';
import { SimpleList } from '../_models/base.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiHandlerService {
    public API_ROOT: string;

    constructor(
        private readonly config: ConfigService,
        private _http: HttpClient) {
        this.API_ROOT = this.config.getSettings('url');
    }

    /** GET Request <ALL> */
    getMany(endpoint: string, page: number): Observable<any> {
        const params = new HttpParams()
            .set('page', JSON.stringify(page))
            .set('sortBy', 'created_at')
            .set('sortDirection', 'DESC')

        return this._http.get(`${this.API_ROOT}/api/v1/${endpoint}`, {
            headers: this._headers,
            params
        })
    }

    /** GET Request <SOME | ONE> */
    get(endpoint: string, id: number): Observable<any> {
        return this._http.get(`${this.API_ROOT}/api/v1/${endpoint}/${id}`, {
            headers: this._headers
        });
    }

    /** GET Request <SimpleList> */
    simplelist(endpoint: string): Observable<any> {
        return this._http.get(`${this.API_ROOT}/api/v1/${endpoint}/list`, {
            headers: this._headers
        });
    }

    /** POST Request */
    post(endpoint: string, params: Object): Observable<any> {
        return this._http.post<any>(`${this.API_ROOT}/api/v1/${endpoint}`, params, {
            headers: this._headers
        });
    }

    /** PUT Request */
    put(endpoint: string, id: number, params: Object): Observable<any> {
        return this._http.put<any>(`${this.API_ROOT}/api/v1/${endpoint}/${id}`, params, {
            headers: this._headers
        });
    }

    /** DELETE Request */
    delete(endpoint: string, id: number): Observable<any> {
        return this._http.delete(`${this.API_ROOT}/api/v1/${endpoint}/${id}`, {
            headers: this._headers
        });
    }

    /** ForkJoin */
    forJoin(endpoints: string[]) {
        return Observable.forkJoin([
            ...this._getEndPoints(endpoints)
        ]);
    }

    customGet(endpoint: string, page: number = 1): Observable<any> {
        const params = new HttpParams()
            .set('page', JSON.stringify(page))

        return this._http.get(endpoint, { headers: this._headers, params });
    }

    customPost(endpoint: string): Observable<any> {
        return this._http.post(endpoint, { headers: this._headers });
    }

    customDelete(endpoint: string): Observable<any> {
        return this._http.delete(endpoint, { headers: this._headers });
    }

    download(endpoint: string, id: number): Observable<Blob> {
        return this._http.get(`${this.API_ROOT}/api/v1/${endpoint}/${id}/action/download`, {
          responseType: 'blob'
        });
      }

    private _getEndPoints(endpoints: string[]) {
        let requests: any[] = endpoints.map(endpoint => {
            return this._http.get<Options[]>(`${this.API_ROOT}/${endpoint}`, {
                headers: this._headers,
            })
        })

        return requests;
    }

    private get _headers() {
        return new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
}

export interface Options {
    id: number,
    name: string
}
