import {Component} from '@angular/core';
import {VwColabSituacaoQtdeOper} from './charts/vwColabSituacaoQtdeOper';
import {VwColabSituacaoQtdeOperService} from './charts/vwColabSituacaoQtdeOperService';

class VwColabSituacaoQtdeOperChart implements VwColabSituacaoQtdeOper {
    constructor(public quantidade?, public situacao?) { }
}

@Component({
    templateUrl: 'app/app.home.html',
    selector: 'home-app'
})
export class AppHome {

    vwColabSituacaoQtdeOper: VwColabSituacaoQtdeOper = new VwColabSituacaoQtdeOperChart();

    vwColabSituacaoQtdeOperList: VwColabSituacaoQtdeOper[];

    constructor(private vwColabSituacaoQtdeOperService: VwColabSituacaoQtdeOperService) { }

    ngOnInit() {
        this.vwColabSituacaoQtdeOperService.getVwColabSituacaoQtdeOper().then(vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList);
    }
}
