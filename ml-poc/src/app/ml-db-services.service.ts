import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
//import {HTTP} from '@angular/http'
@Injectable()
export class MlDbServicesService {
  private dbUrl = "http://localhost/dblist";

  constructor(private http: Http) { }

  getDbList() {

    return this.http.get(this.dbUrl)
      .map((response: Response) => response.json);
  }


}
