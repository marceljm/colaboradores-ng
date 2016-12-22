import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from './employee/employeeService';
import { Message, SelectItem } from 'primeng/primeng';

@Component({
    templateUrl: 'app/app.employee.html',
    selector: 'employee-app',
    providers: [EmployeeService]
})
export class AppEmployee {
    private errorMessage: string;

    colaborador: string;
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
    diretor: string;
    gerenteSr: string;
    gerente: string;
    coordenador: string;
    supervisor: string;
    grupo: string;
    entreGrupo: string;
    dtNasc: string;
    cpf: string;

    employeeForm: FormGroup;

    constructor(
        private employeeService: EmployeeService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validation();
    }

    validation() {
        this.employeeForm = this.fb.group({
            'colaboradorInput': new FormControl('', [Validators.required]),
            'matriculaInput': new FormControl('', [Validators.required]),
            'matrComplInput': new FormControl('', [Validators.required]),
        });
    }

}