import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DatabaseService {
  private service_url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getDbList():Observable<any[]> {

    return this.http.get(this.service_url + 'dblist')
      .map((response: Response) => response.json());
  }

  getForests():Observable<any[]> {

    return this.http.get(this.service_url + 'forasts')
      .map((response: Response) => response.json());
  }

  attacheForest(db, forestList){
    this.http.post(this.service_url+'setForestToDB', {database: db, selectedForests: forestList})
    .map((response: Response) => response.json());    
  }

}
