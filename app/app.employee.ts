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

    constructor(
        private employeeService: EmployeeService, private fb: FormBuilder) {
    }

}