import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
//import {HTTP} from '@angular/http'
@Injectable()
export class MlDbServicesService {
  private dbUrl = "http://localhost:3000/";

  constructor(private http: Http) { }

  getDbList():Observable<any[]> {

    return this.http.get(this.dbUrl + 'dblist')
      .map((response: Response) => response.json());
  }

  getForests():Observable<any[]> {

    return this.http.get(this.dbUrl + 'forasts')
      .map((response: Response) => response.json());
  }


}
