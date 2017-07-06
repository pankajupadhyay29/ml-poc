import { Component, OnInit, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
//import { Overlay, overlayConfigFactory } from 'angular2-modal';
//import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { MdDialog, MdDialogRef } from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import {DatabaseService} from '../database.service'
import {DialogComponent} from '../dialog/dialog.component'


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  interval: any;
  loadRecent: any;

  temp: Array<Object>;
  @Input() rows: Array<Object>;
  selectedOption: string;
  trainingSearchTerm: string;

  selectedDb: any;
  constructor(vcRef: ViewContainerRef,public dialog: MdDialog, private dbService: DatabaseService ) {
  }


  ngOnInit() {
    this.loadData = this.loadData.bind(this);
    this.loadData();
  //  this.interval = setInterval(this.loadData, 1 * 1000);
  }

  stringifyName(namedList){
    if(!namedList || !namedList.map){
      return '';
    }

    return namedList.map(n => n.name).join(", ");
  }

  filterDb(event) {
    
    this.trainingSearchTerm = this.trainingSearchTerm || '';
      const val = this.trainingSearchTerm.toLowerCase();
      if (this.temp) {
      const tempdata = this.temp.filter(function (d) {
        return d['name'].toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = tempdata;
      }
  }
  
  loadData() {
    this.dbService.getDbList().subscribe(result=>{
      this.rows = result;
      this.temp = this.rows;
      this.trainingSearchTerm = '';
      console.log(this.rows);
    });
  }

  openDialog(db) {
    this.selectedDb = db;
    console.log(db);
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.selectedDb = db;
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this.highlighted = this.selectedDb.id;
      this.selectedDb = {};
      setInterval(()=> {this.highlighted = -1}, 5 * 1000)
    });
    
    //this.dbService.setDbId(database.id)
  }

  onAction(): void {
    console.log('here');
  }

  highlighted= -1;

  getClasses(id) {
    return this.highlighted == id ? 'highlighted': '';
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

/*
@Component({
  selector: 'app-database',
  templateUrl: './ngx-table-component.component.html',
  styleUrls: ['./ngx-table-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [Modal],
})

export class NgxTableComponentComponent implements OnInit {
  temp: Array<Object>;
  @Input() rows: Array<Object>;
  selectedOption: string;
  trainingSearchTerm: string;
  constructor(vcRef: ViewContainerRef, public modal: Modal, overlay: Overlay, public dialog: MdDialog) {
  }


  ngOnInit() {
    this.temp = this.rows;
    this.trainingSearchTerm = '';
    console.log(this.rows);
  }

  filterDb(event) {
    
    this.trainingSearchTerm = this.trainingSearchTerm || '';
      const val = this.trainingSearchTerm.toLowerCase();
      if (this.temp) {
      const tempdata = this.temp.filter(function (d) {
        return d['DatabaseName'].toLowerCase().indexOf(val) !== -1 || !val;
      });
      // update the rows
      this.rows = tempdata;
      }
  }



  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  onAction(): void {
    console.log('here');
  }

}
*/

// @Component({
//   selector: 'dialog-result-example-dialog',
//   templateUrl: './dialog-result.html',
//   styleUrls: ['./dialog-result.css']
// })
// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
// }

