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

  constructor(private layout: LayoutService, private chart_service: ChartService, private dbService: DatabaseService) { }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();
    console.log(this.widgets);

    this.chart_service.getChartList().subscribe(result => {
      // // let chartType='requestRateTrend';
      // // let chartData={type:chartType,data:result};
      // this.chart.push(chartData);
      // this.widget0data = result;
      // console.log('inService',this.widget0data);
      //  this.widgets[0]['widgetData'] = this.widget0data;
       this.prepareWidgetData(0,result);
      //  console.log('inService',this.widgets[0]['widgetData'])
    });

    this.chart_service.getAvailaibleChartList().subscribe(result => {
      // let chartType='dbAvailabilityTrend';
      // let chartData={type:chartType,data:result};
      // this.chart.push(chartData);
      //this.widgets[1]['widgetData'] = result;
     this.prepareWidgetData(1,result);
    });

    this.barChart();

    this.dbService.getRecent().subscribe(result => {
      //this.widgets[3]['widgetData'] = result;
     this.prepareWidgetData(3,result);
    });

    //this.prepareWidgetData();
    console.log('inOnInit',this.widgets);

  }

  prepareWidgetData(i:any,data:any) {
    console.log(i,data);
    this.widgets[i].widgetData = data;
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
    this.widgets[2]['widgetData'] = data;

  }
  getWidgetClasses(widget) {
    let styles = "w-" + widget.width + ' h-' + widget.height;
    styles = (widget.settings.type == 'links' ? 'links' : 'widget') + ' ' + styles;
    return styles;
  }
}
