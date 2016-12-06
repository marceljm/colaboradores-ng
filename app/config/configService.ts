import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeNode } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { TblColabAdmin } from './tblColabAdmin';
import { TblColabCargo } from './tblColabCargo';
import { TblColabCidade } from './tblColabCidade';
import { TblColabEstado } from './tblColabEstado';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

    private urlTblColabAdmin = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabAdmin';
    private urlTblColabCargo = 'http://localhost:8080/ColaboradoresWS/rest/tblColabCargo';
    private urlTblColabCidade = 'http://localhost:8080/ColaboradoresWS/rest/tblColabCidade';
    private urlTblColabEstado = 'http://localhost:8080/ColaboradoresWS/rest/tblColabEstado';

    constructor(private http: Http) { }

    getTblColabAdmin(): Observable<TblColabAdmin[]> {
        return this.http.get(this.urlTblColabAdmin).map(this.extractData).catch(this.handleError);
    }

    getTblColabCargo(): Observable<TblColabCargo[]> {
        return this.http.get(this.urlTblColabCargo).map(this.extractData).catch(this.handleError);
    }

    getTblColabCidade(): Observable<TblColabCidade[]> {
        return this.http.get(this.urlTblColabCidade).map(this.extractData).catch(this.handleError);
    }

    getTblColabEstado(): Observable<TblColabEstado[]> {
        return this.http.get(this.urlTblColabEstado).map(this.extractData).catch(this.handleError);
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

    putAdmin(tblColabAdmin: TblColabAdmin): Observable<TblColabAdmin> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabAdmin}`;

        tblColabAdmin.nflativo = tblColabAdmin.nflativo ? 1 : 0;

        return this.http
            .put(url, tblColabAdmin, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putCargo(tblColabCargo: TblColabCargo): Observable<TblColabCargo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCargo}`;

        tblColabCargo.nflativo = tblColabCargo.nflativo ? 1 : 0;

        return this.http
            .put(url, tblColabCargo, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putCidade(tblColabCidade: TblColabCidade): Observable<TblColabCidade> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabCidade}`;

        tblColabCidade.nflativo = tblColabCidade.nflativo ? 1 : 0;

        return this.http
            .put(url, tblColabCidade, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    putEstado(tblColabEstado: TblColabEstado): Observable<TblColabEstado> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.urlTblColabEstado}`;

        tblColabEstado.nflativo = tblColabEstado.nflativo ? 1 : 0;

        return this.http
            .put(url, tblColabEstado, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }
}