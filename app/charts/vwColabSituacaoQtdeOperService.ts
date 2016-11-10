import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {VwColabSituacaoQtdeOper} from '../../app/charts/vwColabSituacaoQtdeOper';

@Injectable()
export class VwColabSituacaoQtdeOperService {

    constructor(private http: Http) { }

    getVwColabSituacaoQtdeOper() {
        return this.http.get('app/resources/data/vwColabSituacaoQtdeOper.json')
            .toPromise()
            .then(res => <VwColabSituacaoQtdeOper[]>res.json().data)
            .then(data => { return data; });
    }
}