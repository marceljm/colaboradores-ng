import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppHeader} from './app.header';
import {AppHome} from './app.home';
import {AppComponent} from './app.component';
import {AppComponent2}  from './app.component2';

import {CarService} from './cars/carservice';
import {VwColabSituacaoQtdeOperService} from './charts/vwColabSituacaoQtdeOperService';

import {InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule],
  declarations: [AppHeader, AppComponent, AppComponent2, AppHome],
  bootstrap: [AppHeader, AppComponent, AppComponent2, AppHome],
  providers: [CarService, VwColabSituacaoQtdeOperService]
})
export class AppModule { }
