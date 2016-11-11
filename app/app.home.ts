import {Component, OnInit} from '@angular/core';
import {VwColabSituacaoQtdeOper} from './charts/vwColabSituacaoQtdeOper';
import {VwColabSituacaoQtdeOperService} from './charts/vwColabSituacaoQtdeOperService';

@Component({
    templateUrl: 'app/app.home.html',
    selector: 'home-app'
})
export class AppHome implements OnInit {
    errorMessage: string;

    vwColabSituacaoQtdeOper: VwColabSituacaoQtdeOper = new VwColabSituacaoQtdeOper();
    vwColabSituacaoQtdeOperChart: any;

    vwColabSituacaoQtdeOperList: VwColabSituacaoQtdeOper[];

    constructor(
        private vwColabSituacaoQtdeOperService: VwColabSituacaoQtdeOperService) { }

    ngOnInit() {
        this.getVwColabSituacaoQtdeOperList();
        this.showVwColabSituacaoQtdeOperChart();
    }

    getVwColabSituacaoQtdeOperList() {
        this.vwColabSituacaoQtdeOperService.getVwColabSituacaoQtdeOper().subscribe(
            vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList,
            error => this.errorMessage = <any>error);
    }

    showVwColabSituacaoQtdeOperChart() {
        this.vwColabSituacaoQtdeOperChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }
}