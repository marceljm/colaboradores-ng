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
import { AppComponent2 } from './app.component2';

import { CarService } from './cars/carservice';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule, ChartModule, TreeModule, TreeNode, MessagesModule, GrowlModule, InputSwitchModule } from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule, AccordionModule, ChartModule, TreeModule, MessagesModule, GrowlModule, InputSwitchModule],
  declarations: [AppHeader, AppComponent, AppHome, AppTree, AppConfig],
  bootstrap: [AppHeader, AppComponent, AppHome, AppTree, AppConfig]
})
export class AppModule { }
