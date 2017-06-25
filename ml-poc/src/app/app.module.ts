import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule, MdDialogModule } from "@angular/material";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';
import { LayoutService } from './layout.service';
import { DatabaseService } from './database.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,      
    HeaderComponent,
    DashboardComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'database',
      component: DatabaseComponent
    }    
    ])
  ],
  providers: [MenuService, LayoutService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
