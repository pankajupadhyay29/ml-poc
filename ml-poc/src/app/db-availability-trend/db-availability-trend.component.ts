import { Component, OnInit } from '@angular/core';
import { ChartService } from "app/chart.service";

@Component({
  selector: 'app-db-availability-trend',
  templateUrl: './db-availability-trend.component.html',
  styleUrls: ['./db-availability-trend.component.css']
})
export class DbAvailabilityTrendComponent implements OnInit {

  chartData: any;
  options: any;
  interval:any;
  widgets = [];
  chart = [];
  widgetsGraphs = [];

  chartOptions = {
    chart: {
      type: 'lineChart',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      useInteractiveGuideline: true,
      x: function (d) { return d.x; },
      y: function (d) { return d.y; },
      xAxis: { axisLabel: 'Time (ms)' },
      yAxis: {
        axisLabel: 'NO OF REQUESTS',
        tickFormat: function (d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      }
    }
  };


  constructor(private chart_service: ChartService) { }

  ngOnInit() {
     this.loadService = this.loadService.bind(this);
    this.loadService();
    this.interval = setInterval(this.loadService, 20 * 1000);
    
  }

  loadService(){
    this.chart_service.getAvailaibleChartList().subscribe(result => {
      this.chart = result;
      this.options = this.chartOptions;
      this.chartData = this.createAvailaibleChartData();
    });
  }

  createAvailaibleChartData() {
    let data = [];
    let i = 0;
    let linedata = {};
    linedata['values'] = [];
    this.chart.forEach(element => {
      let tempdata = { x: 0, y: 0 };
      tempdata.x = i;
      if (element.data != undefined) {
        tempdata.y = element.data.UnavialableDB;
      }
      else {
        tempdata.y = 0;
      }
      linedata['values'].push(tempdata);
      i += 3;
    });
    linedata['color'] = '#7777ff';
    linedata['area'] = true;
    data.push(linedata);
    return data;
  }
   ngOnDestroy() {
    clearInterval(this.interval);
  }
}
