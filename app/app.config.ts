import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from './config/configService';
import { TblColabAdmin } from './config/TblColabAdmin';
import { TblColabCargo } from './config/TblColabCargo';
import { TblColabCidade } from './config/TblColabCidade';
import { TblColabEstado } from './config/TblColabEstado';
import { TblColabGrupo } from './config/TblColabGrupo';
import { TblColabSituacao } from './config/TblColabSituacao';
import { TblColabEntreGrupo } from './config/TblColabEntreGrupo';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: 'app/app.config.html',
    selector: 'config-app',
    providers: [ConfigService]
})
export class AppConfig implements OnInit {
    private errorMessage: string;

    tblColabAdminList: TblColabAdmin[];
    tblColabCargoList: TblColabCargo[];
    tblColabCidadeList: TblColabCidade[];
    tblColabEstadoList: TblColabEstado[];
    tblColabGrupoList: TblColabGrupo[];
    tblColabSituacaoList: TblColabSituacao[];
    tblColabEntreGrupoList: TblColabEntreGrupo[];

    msgs: Message[] = [];

    constructor(
        private configService: ConfigService) {
    }

    ngOnInit() {
        this.getConfig();
    }

    getConfig() {
        this.configService.getTblColabAdmin().subscribe(
            tblColabAdminList => this.tblColabAdminList = tblColabAdminList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabCargo().subscribe(
            tblColabCargoList => this.tblColabCargoList = tblColabCargoList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabCidade().subscribe(
            tblColabCidadeList => this.tblColabCidadeList = tblColabCidadeList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabEstado().subscribe(
            tblColabEstadoList => this.tblColabEstadoList = tblColabEstadoList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabGrupo().subscribe(
            tblColabGrupoList => this.tblColabGrupoList = tblColabGrupoList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabSituacao().subscribe(
            tblColabSituacaoList => this.tblColabSituacaoList = tblColabSituacaoList,
            error => this.errorMessage = <any>error
        );
        this.configService.getTblColabEntreGrupo().subscribe(
            tblColabEntreGrupoList => this.tblColabEntreGrupoList = tblColabEntreGrupoList,
            error => this.errorMessage = <any>error
        );
    }

    selectAdmin(tblColabAdmin: TblColabAdmin) {
        var selectedAdmin: TblColabAdmin = Object.assign({}, tblColabAdmin);
        this.saveAdmin(selectedAdmin);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabAdmin.snomatrcompl, detail: (tblColabAdmin.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectCargo(tblColabCargo: TblColabCargo) {
        var selectedCargo: TblColabCargo = Object.assign({}, tblColabCargo);
        this.saveCargo(selectedCargo);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabCargo.sdccargo, detail: (tblColabCargo.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectCidade(tblColabCidade: TblColabCidade) {
        var selectedCidade: TblColabCidade = Object.assign({}, tblColabCidade);
        this.saveCidade(selectedCidade);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabCidade.sdccidade, detail: (tblColabCidade.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectEstado(tblColabEstado: TblColabEstado) {
        var selectedEstado: TblColabEstado = Object.assign({}, tblColabEstado);
        this.saveEstado(selectedEstado);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabEstado.sdcestado, detail: (tblColabEstado.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectGrupo(tblColabGrupo: TblColabGrupo) {
        var selectedGrupo: TblColabGrupo = Object.assign({}, tblColabGrupo);
        this.saveGrupo(selectedGrupo);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabGrupo.sdcgrupo, detail: (tblColabGrupo.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectSituacao(tblColabSituacao: TblColabSituacao) {
        var selectedSituacao: TblColabSituacao = Object.assign({}, tblColabSituacao);
        this.saveSituacao(selectedSituacao);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabSituacao.sdcsituacao, detail: (tblColabSituacao.nflativo ? 'Ativo' : 'Inativo') });
    }

    selectEntreGrupo(tblColabEntreGrupo: TblColabEntreGrupo) {
        var selectedEntreGrupo: TblColabEntreGrupo = Object.assign({}, tblColabEntreGrupo);
        this.saveEntreGrupo(selectedEntreGrupo);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabEntreGrupo.sdcentregrupo, detail: (tblColabEntreGrupo.nflativo ? 'Ativo' : 'Inativo') });
    }

    saveAdmin(tblColabAdmin: TblColabAdmin) {
        this.configService
            .putAdmin(tblColabAdmin)
            .subscribe();
    }

    saveCargo(tblColabCargo: TblColabCargo) {
        this.configService
            .putCargo(tblColabCargo)
            .subscribe();
    }

    saveCidade(tblColabCidade: TblColabCidade) {
        this.configService
            .putCidade(tblColabCidade)
            .subscribe();
    }

    saveEstado(tblColabEstado: TblColabEstado) {
        this.configService
            .putEstado(tblColabEstado)
            .subscribe();
    }

    saveGrupo(tblColabGrupo: TblColabGrupo) {
        this.configService
            .putGrupo(tblColabGrupo)
            .subscribe();
    }

    saveSituacao(tblColabSituacao: TblColabSituacao) {
        this.configService
            .putSituacao(tblColabSituacao)
            .subscribe();
    }

    saveEntreGrupo(tblColabEntreGrupo: TblColabEntreGrupo) {
        this.configService
            .putEntreGrupo(tblColabEntreGrupo)
            .subscribe();
    }
}