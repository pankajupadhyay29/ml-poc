import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {NgForm} from '@angular/forms';
import { Http, Response } from "@angular/http";
import { DatabaseService } from "app/database.service";

@Component({
  selector: 'app-create-db',
  templateUrl: './create-db.component.html',
  styleUrls: ['./create-db.component.css']
})
export class CreateDbComponent implements OnInit {
  // @Input() rows: Array<Object>;
  private service_url = "http://localhost:3000/";
  temp: Array<Object>;
  @Input() dbList: Array<any>;
  dbName: '';
  id = 10;

  constructor(private http: Http, private dbService: DatabaseService) { }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


  ngOnInit() { 
     this.dbService.getDbList().subscribe(result=>{
      this.dbList = result;
      this.temp = this.dbList;
      console.log('db list from create db',this.dbList);
    });  

    // console.log(this.rows); 
}

  createData(db) {
    let data={};
   let database={};
   database={'id':11,'name':'testML'};
   data["database"]= database;
  this.dbService.createDb(JSON.stringify(data));
    // console.log('here in save db', data );
  }

}
