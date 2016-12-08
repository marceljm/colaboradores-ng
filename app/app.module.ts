import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppConfig } from './app.config';
import { AppHeader } from './app.header';
import { AppHome } from './app.home';
import { AppTree } from './app.tree';
import { AppComponent } from './app.component';
import { AppCar } from './app.car';
import { ValidationDemo } from './ValidationDemo';

import { CarService } from './cars/carservice';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule, BlockUIModule, InputMaskModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule, BlockUIModule, InputMaskModule],
    declarations: [AppHeader, AppComponent, AppHome, AppTree, AppConfig, AppCar, ValidationDemo],
    bootstrap: [AppHeader, AppComponent, AppHome, AppTree, AppConfig, AppCar, ValidationDemo],
    providers: [CarService]
})
export class AppModule { }
