import {Component, OnInit} from '@angular/core';
import {VwColabSituacaoQtde} from './charts/vwColabSituacaoQtde';
import {VwColabQtdeService} from './charts/vwColabQtdeService';

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

    vwColabSituacaoQtdeOperList: VwColabSituacaoQtde[];
    vwColabSituacaoQtdeOperChart: any;
    vwColabSituacaoQtdeOperLabel: Array<string> = new Array<string>();
    vwColabSituacaoQtdeOperAmount: Array<number> = new Array<number>();

    vwColabSituacaoQtdeStaffList: VwColabSituacaoQtde[];
    vwColabSituacaoQtdeStaffChart: any;
    vwColabSituacaoQtdeStaffLabel: Array<string> = new Array<string>();
    vwColabSituacaoQtdeStaffAmount: Array<number> = new Array<number>();

    vwColabSituacaoQtdeTotalList: VwColabSituacaoQtde[];
    vwColabSituacaoQtdeTotalChart: any;
    vwColabSituacaoQtdeTotalLabel: Array<string> = new Array<string>();
    vwColabSituacaoQtdeTotalAmount: Array<number> = new Array<number>();

    optionsOper: any;
    optionsStaff: any;
    optionsTotal: any;

    displayOperChart: boolean = false;
    displayStaffChart: boolean = false;
    displayTotalChart: boolean = false;

    constructor(
        private vwColabQtdeService: VwColabQtdeService) {
        this.createVwColabSituacaoQtdeOperChart();
        this.createVwColabSituacaoQtdeStaffChart();
        this.createVwColabSituacaoQtdeTotalChart();
    }

    ngOnInit() {
        this.getVwColabSituacaoQtdeList();
    }

    getVwColabSituacaoQtdeList() {
        this.vwColabQtdeService.getVwColabSituacaoQtdeOper().subscribe(
            vwColabSituacaoQtdeOperList => this.vwColabSituacaoQtdeOperList = vwColabSituacaoQtdeOperList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeOperList) {
                    this.vwColabSituacaoQtdeOperAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeOperLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeOperChart();
            }
        );
        this.vwColabQtdeService.getVwColabSituacaoQtdeStaff().subscribe(
            vwColabSituacaoQtdeStaffList => this.vwColabSituacaoQtdeStaffList = vwColabSituacaoQtdeStaffList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeStaffList) {
                    this.vwColabSituacaoQtdeStaffAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeStaffLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeStaffChart();
            }
        );
        this.vwColabQtdeService.getVwColabSituacaoQtdeTotal().subscribe(
            vwColabSituacaoQtdeTotalList => this.vwColabSituacaoQtdeTotalList = vwColabSituacaoQtdeTotalList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.vwColabSituacaoQtdeTotalList) {
                    this.vwColabSituacaoQtdeTotalAmount.push(entry.quantidade);
                    this.vwColabSituacaoQtdeTotalLabel.push(entry.situacao);
                }
                this.createVwColabSituacaoQtdeTotalChart();
            }
        );
    }

    createVwColabSituacaoQtdeOperChart() {
        this.vwColabSituacaoQtdeOperChart = {
            labels: this.vwColabSituacaoQtdeOperLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeOperAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }]
        };
    }

    createVwColabSituacaoQtdeStaffChart() {
        this.vwColabSituacaoQtdeStaffChart = {
            labels: this.vwColabSituacaoQtdeStaffLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeStaffAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }]
        }
    }

    createVwColabSituacaoQtdeTotalChart() {
        this.vwColabSituacaoQtdeTotalChart = {
            labels: this.vwColabSituacaoQtdeTotalLabel,
            datasets: [
                {
                    data: this.vwColabSituacaoQtdeTotalAmount,
                    backgroundColor: this.colorList,
                    hoverBackgroundColor: this.colorList
                }]
        }
    }

    showOperDialog() {
        this.displayOperChart = true;
    }

    showStaffDialog() {
        this.displayStaffChart = true;
    }

    showTotalDialog() {
        this.displayTotalChart = true;
    }

}