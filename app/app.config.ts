import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from './config/configService';
import { TblColabAdmin } from './config/TblColabAdmin';
import { TblColabCargo } from './config/TblColabCargo';
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
}