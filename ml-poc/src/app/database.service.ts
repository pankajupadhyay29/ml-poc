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
    return this.http.get(this.service_url + 'forests')
      .map((response: Response) => response.json());
  }

  attacheForest(forestList){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.service_url+'setForestToDB', forestList,headers)
      .map((response: Response) => response.json());

    console.log(JSON.stringify(forestList));
  }
}
