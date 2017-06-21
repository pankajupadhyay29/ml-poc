import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HotTableModule } from 'ng2-handsontable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HotTableModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
