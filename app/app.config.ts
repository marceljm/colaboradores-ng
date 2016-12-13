import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
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

    displayAdmin: boolean = false;
    displayCargo: boolean = false;

    userform: FormGroup;
    cargoForm: FormGroup;

    submitted: boolean;

    matrCompl: string;
    cargo: string;
    upper() {
        this.matrCompl = this.matrCompl.toUpperCase();
    }

    showDialogAdmin() {
        this.displayAdmin = true;
        this.matrCompl = null;
    }

    showDialogCargo() {
        this.displayCargo = true;
        this.cargo = null;
    }

    constructor(
        private configService: ConfigService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.getConfig();
        this.validation();
    }

    onSubmitAdmin(value: string) {
        let tblColabAdmin: TblColabAdmin = new TblColabAdmin();
        tblColabAdmin.nflativo = 1;
        tblColabAdmin.ativo = true;
        tblColabAdmin.snomatrcompl = value["matriculaInputMask"];
        this.tblColabAdminList.push(tblColabAdmin);
        this.addAdmin(tblColabAdmin);

        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabAdmin.snomatrcompl, detail: 'Criado com sucesso' });

        this.displayAdmin = false;
    }

    onSubmitCargo(value: string) {
        let tblColabCargo: TblColabCargo = new TblColabCargo();
        tblColabCargo.nflativo = 1;
        tblColabCargo.ativo = true;
        tblColabCargo.idcargo = 100;
        tblColabCargo.sdccargo = value["cargoInput"];
        tblColabCargo.sdccargo = tblColabCargo.sdccargo.toUpperCase();
        this.configService.getTblColabCargoMax().subscribe(
            tblColabCargoMax => {
                tblColabCargo.idcargo = tblColabCargoMax + 1;
                this.tblColabCargoList.push(tblColabCargo);
                this.addCargo(tblColabCargo);
            },
            error => this.errorMessage = <any>error,
        );
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabCargo.sdccargo, detail: 'Criado com sucesso' });

        this.displayCargo = false;
    }

    get diagnostic() { return JSON.stringify(this.userform.value); }

    getConfig() {
        this.configService.getTblColabAdmin().subscribe(
            tblColabAdminList => this.tblColabAdminList = tblColabAdminList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.tblColabAdminList) {
                    entry.ativo = entry.nflativo == 1;
                }
            }
        );
        this.configService.getTblColabCargo().subscribe(
            tblColabCargoList => this.tblColabCargoList = tblColabCargoList,
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.tblColabCargoList) {
                    entry.ativo = entry.nflativo == 1;
                }
            }
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

    validation() {
        this.userform = this.fb.group({
            'matriculaInputMask': new FormControl('', [Validators.required])
        });
        this.cargoForm = this.fb.group({
            'cargoInput': new FormControl('', [Validators.required])
        });
    }

    selectAdmin(tblColabAdmin: TblColabAdmin) {
        tblColabAdmin.nflativo = tblColabAdmin.ativo ? 1 : 0;
        this.saveAdmin(tblColabAdmin);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabAdmin.snomatrcompl, detail: (tblColabAdmin.ativo ? 'Ativo' : 'Inativo') });
    }

    selectCargo(tblColabCargo: TblColabCargo) {
        tblColabCargo.nflativo = tblColabCargo.ativo ? 1 : 0;
        this.saveCargo(tblColabCargo);

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: tblColabCargo.sdccargo, detail: (tblColabCargo.ativo ? 'Ativo' : 'Inativo') });
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

    addAdmin(tblColabAdmin: TblColabAdmin) {
        this.configService
            .postAdmin(tblColabAdmin)
            .subscribe();
    }

    addCargo(tblColabCargo: TblColabCargo) {
        this.configService
            .postCargo(tblColabCargo)
            .subscribe();
    }
}