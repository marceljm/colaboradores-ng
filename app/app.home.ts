import {Component, OnInit} from '@angular/core';
import {VwColabSituacaoQtdeOper} from './charts/vwColabSituacaoQtdeOper';
import {VwColabSituacaoQtdeOperService} from './charts/vwColabSituacaoQtdeOperService';

@Component({
    templateUrl: 'app/app.home.html',
    selector: 'home-app'
})
export class AppHome implements OnInit {
    errorMessage: string;
    colorList: string[] = [
        "#4BB2C5",
        "#EAA228",
        "#C5B47F",
        "#579575",
        "#839557",
        "#958C12",
        "#953579",
        "#4B5DE4",
        "#D8B83F",
        "#FF5800",
    ]

    vwColabSituacaoQtdeOper: VwColabSituacaoQtdeOper = new VwColabSituacaoQtdeOper();
    vwColabSituacaoQtdeOperChart: any;

    vwColabSituacaoQtdeOperList: VwColabSituacaoQtdeOper[];
    vwColabSituacaoQtdeOperLabel: Array<string> = new Array<string>();
    vwColabSituacaoQtdeOperAmount: Array<number> = new Array<number>();

    constructor(
        private vwColabSituacaoQtdeOperService: VwColabSituacaoQtdeOperService) { }

    ngOnInit() {
        this.getVwColabSituacaoQtdeOperList();
        this.showVwColabSituacaoQtdeOperChart();
    }

    getVwColabSituacaoQtdeOperList() {
        this.vwColabSituacaoQtdeOperService.getVwColabSituacaoQtdeOper().subscribe(
            vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeOperList) {
                    this.vwColabSituacaoQtdeOperAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeOperLabel.push(entry.situacao);
                }
                console.log(this.vwColabSituacaoQtdeOperLabel);
                this.showVwColabSituacaoQtdeOperChart();
            }
        );
    }

    showVwColabSituacaoQtdeOperChart() {
        this.vwColabSituacaoQtdeOperChart = {
            labels: this.vwColabSituacaoQtdeOperLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeOperAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }]
        }
    }
}