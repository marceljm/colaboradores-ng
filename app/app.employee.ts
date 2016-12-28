import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from './employee/employeeService';
import { Message, SelectItem } from 'primeng/primeng';
import { VwColabEstado } from './employee/VwColabEstado';
import { VwColabCidade } from './employee/VwColabCidade';
import { VwColabCargo } from './employee/VwColabCargo';
import { VwColabCargaHoraria } from './employee/VwColabCargaHoraria';
import { VwColabSituacaoNovo } from './employee/VwColabSituacaoNovo';
import { VwColabDiretor } from './employee/VwColabDiretor';
import { VwColabGerenteSr } from './employee/VwColabGerenteSr';
import { VwColabGerente } from './employee/VwColabGerente';
import { VwColabCoordenador } from './employee/VwColabCoordenador';
import { VwColabSupervisor } from './employee/VwColabSupervisor';
import { VwColabGrupo } from './employee/VwColabGrupo';
import { VwColabEntreGrupo } from './employee/VwColabEntreGrupo';

@Component({
    templateUrl: 'app/app.employee.html',
    selector: 'employee-app',
    providers: [EmployeeService]
})
export class AppEmployee {
    private errorMessage: string;

    colaborador: string;
    cpf: string;
    dtNasc: string;
    matricula: string;
    matrCompleta: string;
    loginTel: string;
    dtAdmEmpresa: Date;
    dtAdmArea: Date;
    estado: string;
    cidade: string;
    cargo: string;
    cargaHoraria: string;
    hrEntrada: Date;
    hrSaida: Date;
    situacao: string;
    dtFinal: Date;
    diretor: string;
    gerenteSr: string;
    gerente: string;
    coordenador: string;
    supervisor: string;
    grupo: string;
    entreGrupo: string;

    estadoSelectItem: SelectItem[] = [];
    cidadeSelectItem: SelectItem[] = [];
    cargoSelectItem: SelectItem[] = [];
    cargaHorariaSelectItem: SelectItem[] = [];
    situacaoNovoSelectItem: SelectItem[] = [];
    diretorSelectItem: SelectItem[] = [];
    gerenteSrSelectItem: SelectItem[] = [];
    gerenteSelectItem: SelectItem[] = [];
    coordenadorSelectItem: SelectItem[] = [];
    supervisorSelectItem: SelectItem[] = [];
    grupoSelectItem: SelectItem[] = [];
    entreGrupoSelectItem: SelectItem[] = [];

    vwColabEstadoList: VwColabEstado[];
    vwColabCidadeList: VwColabCidade[];
    vwColabCargoList: VwColabCargo[];
    vwColabCargaHorariaList: VwColabCargaHoraria[];
    vwColabSitucaoNovoList: VwColabSituacaoNovo[];
    vwColabDiretorList: VwColabDiretor[];
    vwColabGerenteSrList: VwColabGerenteSr[];
    vwColabGerenteList: VwColabGerente[];
    vwColabCoordenadorList: VwColabCoordenador[];
    vwColabSupervisorList: VwColabSupervisor[];
    vwColabGrupoList: VwColabGrupo[];
    vwColabEntreGrupoList: VwColabEntreGrupo[];

    employeeForm: FormGroup;

    constructor(
        private employeeService: EmployeeService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validation();
        this.getEstado();
        this.getCidade();
        this.getCargo();
        this.getCargaHoraria();
        this.getSituacaoNovo();
        this.getDiretor();
        this.getGerenteSr();
        this.getGerente();
        this.getCoordenador();
        this.getSupervisor();
        this.getGrupo();
        this.getEntreGrupo();
    }

    validation() {
        this.employeeForm = this.fb.group({
            'colaboradorInput': new FormControl('', [Validators.required]),
            'cpfInput': new FormControl('', [Validators.required]),
            'dtNascInput': new FormControl('', [Validators.required]),
            'matriculaInput': new FormControl('', [Validators.required]),
            'matrComplInput': new FormControl('', [Validators.required]),
            'loginTelInput': new FormControl('', [Validators.required]),
            'dtAdmEmpresaInput': new FormControl('', [Validators.required]),
            'dtAdmAreaInput': new FormControl('', [Validators.required]),
            'estadoInput': new FormControl('', [Validators.required]),
            'cidadeInput': new FormControl('', [Validators.required]),
            'cargoInput': new FormControl('', [Validators.required]),
            'cargaHorariaInput': new FormControl('', [Validators.required]),
            'hrEntradaInput': new FormControl('', [Validators.required]),
            'situacaoNovoInput': new FormControl('', [Validators.required]),
            'dtFinalInput': new FormControl('', [Validators.required]),
            'diretorInput': new FormControl('', [Validators.required]),
            'gerenteSrInput': new FormControl('', [Validators.required]),
            'gerenteInput': new FormControl('', [Validators.required]),
            'coordenadorInput': new FormControl('', [Validators.required]),
            'supervisorInput': new FormControl('', [Validators.required]),
            'grupoInput': new FormControl('', [Validators.required]),
            'entreGrupoInput': new FormControl('', [Validators.required]),
        });
    }

    getEstado() {
        this.employeeService.getVwColabEstado().subscribe(
            vwColabEstadoList => this.vwColabEstadoList = vwColabEstadoList,
            error => this.errorMessage = <any>error,
            () => {
                this.estadoSelectItem = [];
                this.estadoSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabEstadoList) {
                    this.estadoSelectItem.push({ label: entry.estado, value: i });
                    i++;
                }
            }
        );
    }

    getCidade() {
        this.employeeService.getVwColabCidade().subscribe(
            vwColabCidadeList => this.vwColabCidadeList = vwColabCidadeList,
            error => this.errorMessage = <any>error,
            () => {
                this.cidadeSelectItem = [];
                this.cidadeSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabCidadeList) {
                    this.cidadeSelectItem.push({ label: entry.cidade, value: i });
                    i++;
                }
            }
        );
    }

    getCargo() {
        this.employeeService.getVwColabCargo().subscribe(
            vwColabCargoList => this.vwColabCargoList = vwColabCargoList,
            error => this.errorMessage = <any>error,
            () => {
                this.cargoSelectItem = [];
                this.cargoSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabCargoList) {
                    this.cargoSelectItem.push({ label: entry.cargo, value: i });
                    i++;
                }
            }
        );
    }

    getCargaHoraria() {
        this.employeeService.getVwColabCargaHoraria().subscribe(
            vwColabCargaHorariaList => this.vwColabCargaHorariaList = vwColabCargaHorariaList,
            error => this.errorMessage = <any>error,
            () => {
                this.cargaHorariaSelectItem = [];
                this.cargaHorariaSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabCargaHorariaList) {
                    this.cargaHorariaSelectItem.push({ label: entry.cargaHoraria, value: i });
                    i++;
                }
            }
        );
    }

    getSituacaoNovo() {
        this.employeeService.getVwColabSituacaoNovo().subscribe(
            vwColabSitucaoNovoList => this.vwColabSitucaoNovoList = vwColabSitucaoNovoList,
            error => this.errorMessage = <any>error,
            () => {
                this.situacaoNovoSelectItem = [];
                this.situacaoNovoSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabSitucaoNovoList) {
                    this.situacaoNovoSelectItem.push({ label: entry.situacao, value: i });
                    i++;
                }
            }
        );
    }

    getDiretor() {
        this.employeeService.getVwColabDiretor().subscribe(
            vwColabDiretorList => this.vwColabDiretorList = vwColabDiretorList,
            error => this.errorMessage = <any>error,
            () => {
                this.diretorSelectItem = [];
                this.diretorSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabDiretorList) {
                    this.diretorSelectItem.push({ label: entry.diretor, value: i });
                    i++;
                }
            }
        );
    }

    getGerenteSr() {
        this.employeeService.getVwColabGerenteSr().subscribe(
            vwColabGerenteSrList => this.vwColabGerenteSrList = vwColabGerenteSrList,
            error => this.errorMessage = <any>error,
            () => {
                this.gerenteSrSelectItem = [];
                this.gerenteSrSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabGerenteSrList) {
                    this.gerenteSrSelectItem.push({ label: entry.gerenteSr, value: i });
                    i++;
                }
            }
        );
    }

    getGerente() {
        this.employeeService.getVwColabGerente().subscribe(
            vwColabGerenteList => this.vwColabGerenteList = vwColabGerenteList,
            error => this.errorMessage = <any>error,
            () => {
                this.gerenteSelectItem = [];
                this.gerenteSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabGerenteList) {
                    this.gerenteSelectItem.push({ label: entry.gerente, value: i });
                    i++;
                }
            }
        );
    }

    getCoordenador() {
        this.employeeService.getVwColabCoordenador().subscribe(
            vwColabCoordenadorList => this.vwColabCoordenadorList = vwColabCoordenadorList,
            error => this.errorMessage = <any>error,
            () => {
                this.coordenadorSelectItem = [];
                this.coordenadorSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabCoordenadorList) {
                    this.coordenadorSelectItem.push({ label: entry.coordenador, value: i });
                    i++;
                }
            }
        );
    }

    getSupervisor() {
        this.employeeService.getVwColabSupervisor().subscribe(
            vwColabSupervisorList => this.vwColabSupervisorList = vwColabSupervisorList,
            error => this.errorMessage = <any>error,
            () => {
                this.supervisorSelectItem = [];
                this.supervisorSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabSupervisorList) {
                    this.supervisorSelectItem.push({ label: entry.supervisor, value: i });
                    i++;
                }
            }
        );
    }

    getGrupo() {
        this.employeeService.getVwColabGrupo().subscribe(
            vwColabGrupoList => this.vwColabGrupoList = vwColabGrupoList,
            error => this.errorMessage = <any>error,
            () => {
                this.grupoSelectItem = [];
                this.grupoSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabGrupoList) {
                    this.grupoSelectItem.push({ label: entry.grupo, value: i });
                    i++;
                }
            }
        );
    }

    getEntreGrupo() {
        this.employeeService.getVwColabEntreGrupo().subscribe(
            vwColabEntreGrupoList => this.vwColabEntreGrupoList = vwColabEntreGrupoList,
            error => this.errorMessage = <any>error,
            () => {
                this.entreGrupoSelectItem = [];
                this.entreGrupoSelectItem.push({ label: '...', value: '' });
                let i: number = 1;
                for (let entry of this.vwColabEntreGrupoList) {
                    this.entreGrupoSelectItem.push({ label: entry.entreGrupo, value: i });
                    i++;
                }
            }
        );
    }

    colaboradorValidation(event: KeyboardEvent) {
        this.colaborador = (<HTMLInputElement>event.target).value.replace(/[^ a-zA-Z\u00C0-\u017F]/g, "");
    }

    matriculaValidation(event: KeyboardEvent) {
        this.matricula = (<HTMLInputElement>event.target).value.replace(/[^\d]/g, "");
    }

    loginTelValidation(event: KeyboardEvent) {
        this.loginTel = (<HTMLInputElement>event.target).value.replace(/[^\d]/g, "");
    }

    dtNascValidation() {
        let dateParts = this.dtNasc.split("/");
        let dateString = dateParts[1] + '/' + dateParts[0] + '/' + Number(dateParts[2]);
        let timestamp = Date.parse(dateString)
        if (isNaN(timestamp))
            this.dtNasc = "";
    }
}