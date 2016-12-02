import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { AppConfig } from './app.config';
import { AppHeader } from './app.header';
import { AppHome } from './app.home';
import { AppTree } from './app.tree';
import { AppComponent } from './app.component';
import { AppCar } from './app.car';

import { CarService } from './cars/carservice';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule } from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, ChartModule, TreeModule, GrowlModule, InputSwitchModule],
  declarations: [AppHeader, AppComponent, AppHome, AppTree, AppConfig, AppCar],
  bootstrap: [AppHeader, AppComponent, AppHome, AppTree, AppConfig, AppCar],
  providers: [CarService]
})
export class AppModule { }
