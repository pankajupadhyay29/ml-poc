import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChartService {
private service_url = "http://localhost:3000/";
  constructor(private http: Http) { }

  getChartList():Observable<any[]> {
//     let params: URLSearchParams = new URLSearchParams();
//     params.append('startDate','Thu Jun 29 2017 14:10:57' );
//  params.append('endDate', 'Thu Jun 29 2017 14:20:57');
//  params.append('dataPointsCount', '10');
// let options = new RequestOptions({
//               // Have to make a URLSearchParams with a query string
//               params
//           });
const currentDate = new Date();
let endDate = new Date(currentDate.getTime()).toISOString();
let startDate = new Date(currentDate.getTime() - (10*60*1000)).toISOString();


//let startDate = 'Fri Jun 30 2017 12:01:57'; //new Date(currentDate.getTime());
//let endDate = 'Fri Jun 30 2017 12:10:57'; //new Date(currentDate.getTime() + (10*60*1000))

let dataPointsCount= '10';

    return this.http.get(this.service_url + 'requestTrend?startDate='+startDate+'&endDate='+endDate+'&dataPointsCount='+dataPointsCount)
      .map((response: Response) => response.json());
  }


 getAvailaibleChartList():Observable<any[]> {
const currentDate = new Date();
let endDate = new Date(currentDate.getTime()).toISOString();
let startDate = new Date(currentDate.getTime() - (10*60*1000)).toISOString();
//let startDate = 'Fri Jun 30 2017 12:01:57'; //new Date(currentDate.getTime());
//let endDate = 'Fri Jun 30 2017 12:10:57'; //new Date(currentDate.getTime() + (10*60*1000))
let dataPointsCount= '10';
    return this.http.get(this.service_url + 'requestAvailabilityTrend?startDate='+startDate+'&endDate='+endDate+'&dataPointsCount='+dataPointsCount)
      .map((response: Response) => response.json());
  }



}
