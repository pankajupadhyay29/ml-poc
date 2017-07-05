import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { WidgetComponent } from '../widget/widget.component'
import { ChartService } from "app/chart.service";
import { DatabaseService } from "app/database.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets = [];
  chart = [];
  AvailaibleChart = [];

  constructor(private layout: LayoutService, private chart_service: ChartService,private dbService: DatabaseService) { }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();
    console.log(this.widgets);

    this.chart_service.getChartList().subscribe(result => {
      // // let chartType='requestRateTrend';
      // // let chartData={type:chartType,data:result};
      // this.chart.push(chartData);
      this.widgets[0]['chart'] = result;
    });

    this.chart_service.getAvailaibleChartList().subscribe(result => {
      // let chartType='dbAvailabilityTrend';
      // let chartData={type:chartType,data:result};
      // this.chart.push(chartData);
      this.widgets[1]['chart'] = result;
    });

    this.barChart();

    this.dbService.getRecent().subscribe (result => {
        this.widgets[3]['chart'] = result;
    });



  }

  barChart() {
    let data;
    data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "App-Server",
            "value": 20
          },
          {
            "label": "Documents",
            "value": 10
          },
          {
            "label": "Extensions",
            "value": 50
          },
          {
            "label": "Fab",
            "value": 70
          },
          // {
          //   "label": "Last-Login",
          //   "value": 90
          // },
          // {
          //   "label": "Meter",
          //   "value": 40
          // },
        ]
      }
    ]
    this.widgets[2]['chart'] = data;

  }
  getWidgetClasses(widget) {
    let styles = "w-" + widget.width + ' h-' + widget.height;
    styles = (widget.settings.type == 'links' ? 'links' : 'widget') + ' ' + styles;
    return styles;
  }
}
