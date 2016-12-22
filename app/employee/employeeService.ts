import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

    private urlTblColabAtual = 'http://sv2kprel2:7001/ColaboradoresWS/rest/tblColabAtual';

    constructor(private http: Http) { }

}