import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppHeader} from './app.header';
import {AppComponent}  from './app.component';
import {CarService} from './cars/carservice';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule],
  declarations: [AppHeader, AppComponent],
  bootstrap: [AppHeader, AppComponent],
  providers: [CarService]
})
export class AppModule { }
