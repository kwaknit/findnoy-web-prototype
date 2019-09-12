import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
    private _mapperIDs$ = new BehaviorSubject(null);

    public getMapperIDs() {
        return this._mapperIDs$;
    }

    public updateMapperIDs(data: number[]) {
        this._mapperIDs$.next(data);
    }
}