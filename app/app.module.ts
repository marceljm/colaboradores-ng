import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppHeader} from './app.header';
import {AppComponent} from './app.component';
import {AppComponent2}  from './app.component2';
import {CarService} from './cars/carservice';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule, TabViewModule],
  declarations: [AppHeader, AppComponent, AppComponent2],
  bootstrap: [AppHeader, AppComponent, AppComponent2],
  providers: [CarService]
})
export class AppModule { }
