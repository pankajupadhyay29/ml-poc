import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChartService {
private service_url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getChartList():Observable<any[]> {

    return this.http.get(this.service_url + 'Chart')
      .map((response: Response) => response.json());
  }

}
