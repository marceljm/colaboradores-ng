import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {VwColabSituacaoQtdeOper} from '../../app/charts/vwColabSituacaoQtdeOper';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VwColabSituacaoQtdeOperService {

    private url = 'http://sv2kprel2:7001/ColaboradoresWS/rest/vwColabSituacaoQtdeOper';

    constructor(private http: Http) { }

    getVwColabSituacaoQtdeOper(): Observable<VwColabSituacaoQtdeOper[]> {
        return this.http.get(this.url).map(this.extractData).catch(this.handleError);
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