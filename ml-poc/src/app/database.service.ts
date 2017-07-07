import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DatabaseService {
  private service_url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getDbList(): Observable<any[]> {
    return this.http.get(this.service_url + 'dblist')
      .map((response: Response) => response.json());
  }

  getForests(): Observable<any[]> {
    return this.http.get(this.service_url + 'forests')
      .map((response: Response) => response.json());
  }

  attacheForest(forestList) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.service_url + 'setForestToDB', forestList, headers)
      .map((response: Response) => response.json());
  }


  createDb(db) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/createDB', db, options)
      .map((response: Response) =>
        response.json()).subscribe((res) => console.log('created' + res));

  }

  createForest(forest) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('forest', forest);
    return this.http.post('http://localhost:3000/createForest', forest, options)
      .map((response: Response) =>
        response.json()).subscribe((res) => console.log('created' + res));

  }

  getRecent() {
    return this.http.get(this.service_url + 'recent')
      .map((response: Response) => response.json());
  }
}
