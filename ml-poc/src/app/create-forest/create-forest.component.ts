import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from "app/database.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-create-forest',
  templateUrl: './create-forest.component.html',
  styleUrls: ['./create-forest.component.css']
})
export class CreateForestComponent implements OnInit {
  dbName: any;
  dbId: any;
  name: any;
  forestName: '';
  content = '+ See More';
  @Input() dbList: Array<any>;
  id = 10;
  
  toggleContent() {
     if( this.content === '+ See More') {
       this.content = '- See Less';
     } else {
       this.content = '+ See More';
     }
   }
  constructor(private dbService: DatabaseService, private router: Router,  private route: ActivatedRoute,
) { }

  ngOnInit() {
    console.log('checking id in url');
  // this.route.params
  //   // (+) converts string 'id' to a number
  //   .switchMap((params: Params) => this.yourProductService.getProductById(+params['id']))
  //   .subscribe((product) => this.product = product);
  this.route.params.subscribe((params: Params) => {
      this.dbId = params['id'];
      this.dbName=params['name'];
      console.log('db id',this.dbId);
      console.log("in form compo: ",this.dbName);
      
 });
}

  createForest() {
    this.id++;
    let data={};
   let forest ={id:0,name:''};
   forest.id=this.id;
   forest.name=this.forestName;
  //  database.relatedDatabase= [{ name: this.security, id: this.id}, {name: this.schema, id: this.id}, {name: this.trigger, id: this.id}]
   data["forest"]= forest;
   JSON.stringify(data);
    this.dbService.createForest(JSON.stringify(data));

    let forestList = {"database":{"id": this.dbId,"name": this.dbName},
        "selectedForests":[{"id": this.id,"name": this.forestName}]}
        console.log('forestlist ', JSON.stringify(forestList));
    this.dbService.attacheForest(JSON.stringify(forestList));
   this.router.navigate(['/database']);
  }

}
