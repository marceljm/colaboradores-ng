import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/configService';
import { TblColabAdmin } from './config/TblColabAdmin';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: 'app/app.config.html',
    selector: 'config-app',
    providers: [ConfigService]
})
export class AppConfig implements OnInit {
    private errorMessage: string;

    tblColabAdminList: TblColabAdmin[];
    tblColabAdminEnabledList: Array<number> = new Array<number>();

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
            error => this.errorMessage = <any>error,
            () => {
                for (let entry of this.tblColabAdminList) {
                    this.tblColabAdminEnabledList.push(entry.nflativo);
                }
            }
        );
    }

    selectAdmin(tblColabAdmin: TblColabAdmin) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Administrador selecionado', detail: 'Matrícula: ' + tblColabAdmin.snomatrcompl });
    }

}