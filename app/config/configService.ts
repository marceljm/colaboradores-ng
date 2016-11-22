import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TreeNode } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { TblColabAdmin } from './tblColabAdmin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

    private urlTblColabAdmin = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabAdmin';

    constructor(private http: Http) { }

    getTblColabAdmin(): Observable<TblColabAdmin[]> {
        return this.http.get(this.urlTblColabAdmin).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}