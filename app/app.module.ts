import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppHeader} from './app.header';
import {AppHome} from './app.home';
import {AppTree} from './app.tree';
import {AppComponent} from './app.component';
import {AppComponent2}  from './app.component2';

import {CarService} from './cars/carservice';
import {VwColabQtdeService} from './charts/vwColabQtdeService';
import {TreeService} from './tree/treeService';

import {InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule, ChartModule, TreeModule, TreeNode} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule, ChartModule, TreeModule],
  declarations: [AppHeader, AppComponent, AppHome, AppTree],
  bootstrap: [AppHeader, AppComponent, AppHome, AppTree],
  providers: [CarService, VwColabQtdeService, TreeService]
})
export class AppModule { }
