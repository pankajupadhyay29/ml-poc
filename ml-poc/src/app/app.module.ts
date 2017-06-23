import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import {DataTableModule,SharedModule} from 'primeng/primeng';     //accordion and accordion tab
//import {MenuItem} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NgxTableComponentComponent } from './ngx-table-component/ngx-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxTableComponentComponent
    // DataTableModule,
    // SharedModule
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
