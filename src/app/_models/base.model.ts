import { Observable } from "rxjs";
import { HttpGetManyResponse, HttpReponseData } from "./http.model";
import { HttpErrorResponse } from "@angular/common/http";

export interface IDelete {
    deleted_at?: Date | string;
}

export interface IDate {
    created_at?: Date | string;
    updated_at?: Date | string;
}

export interface IAtom extends IDelete, IDate {
    id: number;
}

export interface IName {
    name: string;
}

export interface SimpleList {
    id: number;
    name: string;
    access_type?: number;
}

export interface BaseServiceEntity<T> {
    getMany(page: number): Observable<HttpGetManyResponse<T>>;
    getOne(id: number): Observable<T>;
    getSimpleList(): Observable<SimpleList[]>
    create(model: T): Observable<HttpReponseData<T>>;
    update(model: T): Observable<HttpReponseData<T>>;
    delete(id: number): Observable<string>;
    success(msg: string): void;
    error(msg: HttpErrorResponse): void;
    deleteFile?: (id: number) => Observable<string>;
}