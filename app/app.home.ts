import {Component, OnInit} from '@angular/core';
import {VwColabSituacaoQtdeOper} from './charts/vwColabSituacaoQtdeOper';
import {VwColabSituacaoQtdeOperService} from './charts/vwColabSituacaoQtdeOperService';

class VwColabSituacaoQtdeOperChart implements VwColabSituacaoQtdeOper {
    constructor(public quantidade?, public situacao?) { }
}

@Component({
    templateUrl: 'app/app.home.html',
    selector: 'home-app'
})
export class AppHome implements OnInit {
    errorMessage: string;

    vwColabSituacaoQtdeOper: VwColabSituacaoQtdeOper = new VwColabSituacaoQtdeOperChart();

    vwColabSituacaoQtdeOperList: VwColabSituacaoQtdeOper[];

    constructor(
        private vwColabSituacaoQtdeOperService: VwColabSituacaoQtdeOperService) { }

    ngOnInit() {
        this.getVwColabSituacaoQtdeOperList();
    }

    getVwColabSituacaoQtdeOperList() {
        this.vwColabSituacaoQtdeOperService.getVwColabSituacaoQtdeOper().subscribe(
            vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList,
            error => this.errorMessage = <any>error);
    }
}
