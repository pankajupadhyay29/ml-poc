import { Component, OnInit, Input, ViewContainerRef, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import { DatabaseService } from '../database.service'
import { DialogComponent } from '../dialog/dialog.component'
import { Params, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  Id: any;
  interval: any;
  loadRecent: any;

  temp: Array<Object>;
  rows: Array<Object>;
  selectedOption: string;
  dbSearchTerm: string;

  selectedDb: any;
  constructor(vcRef: ViewContainerRef, public dialog: MdDialog, private dbService: DatabaseService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    let self = this;
    this.route.params.subscribe((params: Params) => {
      this.Id = params['id'];
    });

    setTimeout(function () {
      self.loadData();
    }, 0);
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  stringifyName(namedList) {
    if (!namedList || !namedList.map) {
      return '';
    }

    return namedList.map(n => n.name).join(", ");
  }

  filterDb(event) {
    this.dbSearchTerm = this.dbSearchTerm || '';
    const val = this.dbSearchTerm.toLowerCase();
    if (this.temp) {
      const tempdata = this.temp.filter(function (d) {
        return d['name'].toLowerCase().indexOf(val) !== -1 || !val;
      });
      // update the rows
      this.rows = tempdata;
    }
  }

  loadData() {
    this.dbService.getDbList().subscribe(result => {
      this.rows = result;
      this.temp = this.rows;
      this.dbSearchTerm = '';
    });
  }

  openDialog(db) {
    this.selectedDb = db;
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.selectedDb = db;
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this.highlighted = this.selectedDb.id;
      this.selectedDb = {};
      setInterval(() => { this.highlighted = -1 }, 5 * 1000)
    });
  }

  onAction(): void {
  }

  highlighted = -1;

  getClasses(id) {
    return this.highlighted == id ? 'highlighted' : '';
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}