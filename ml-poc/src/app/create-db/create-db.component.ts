import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {NgForm} from '@angular/forms';
import { Http, Response } from "@angular/http";
import { DatabaseService } from "app/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-db',
  templateUrl: './create-db.component.html',
  styleUrls: ['./create-db.component.css']
})
export class CreateDbComponent implements OnInit {
  content = '+ See More';  
  // @Input() rows: Array<Object>;
  private service_url = "http://localhost:3000/";
  temp: Array<Object>;
  @Input() dbList: Array<any>;
  dbName: '';
  id = 10;
  security: '';
  schema: '';
  trigger: '';

  constructor(private http: Http, private dbService: DatabaseService,private router: Router,) { }

   toggleContent() {
     if(this.content === '+ See More') {
       this.content = '- See Less';
     } else {
       this.content = '+ See More';
     }
   }

  
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
    this.id++;
    let data={};
   let database={id:0,name:'',isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9}, { name: 'Schemas', id: 8 }, ], forests: [{ name: 'mlsonforest', id: 6 }], appServers: [{ name: 'mlsprer', id: 3, isDefault: true }, ]};
   database.id=this.id;
   database.name=this.dbName;
  //  database.relatedDatabase= [{ name: this.security, id: this.id}, {name: this.schema, id: this.id}, {name: this.trigger, id: this.id}]
   data["database"]= database;
   console.log(JSON.stringify(data));
    this.dbService.createDb(JSON.stringify(data));
   this.router.navigate(['/database']);
    // console.log('here in save db', data );
  }

}
