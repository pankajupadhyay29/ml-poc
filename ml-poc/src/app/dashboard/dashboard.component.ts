import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { WidgetComponent } from '../widget/widget.component'
import { ChartService } from "app/chart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets = [];
  chart = [];
  widgetsGraphs = [];

  chartOptions = {
    chart: {
      type: '',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function (d) { return d.lable; },
      y: function (d) { return d.value; },
      xAxis: {},
      yAxis: {}
    }
  };

  barChartOptions = {
    chart: {
      type: '',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function (d) { return d.lable; },
      y: function (d) { return d.value; },
      xAxis: {},
      yAxis: {}
    }
  };

  constructor(private layout: LayoutService, private chart_service: ChartService) { }

  ngOnInit() {
    // this.widgets = this.layout.getWidgetLayout();

    this.chart_service.getChartList().subscribe(result => {
      this.widgets = this.layout.getWidgetLayout();
      this.chart = result;
      console.log('new', this.chart);
      this.transform();
      this.showBarChart();
      for (let i = 0; i < this.widgets.length; i++) {
      console.log('widgetgraphs in subscribe',this.widgetsGraphs[i]);
      this.widgets[i]['chart'] = this.widgetsGraphs[i] || {};
    }
  });

  }

  showBarChart(){
    let graphData = [];
    let cOptions=this.barChartOptions;
    graphData.push(cOptions);
          graphData[0]['chart']['type'] = 'discreteBarChart';
          graphData[0]['chart']['showValues'] = true;
          graphData[0]['chart']['valueFormat'] = function (d) {
             return d3.format(',.4f')(d);
           };
           graphData[0]['chart']['duration'] = 500;
           graphData[0]['chart'].xAxis = {
             axisLabel: 'X Axis'
           }
           graphData[0]['chart'].yAxis = {
             axisLabel: 'Y Axis',
             axisLabelDistance: -10
           }
           let bardata=this.createBarChartData();
           graphData.push(bardata);
           this.widgetsGraphs.push(graphData);
           console.log('in showBarChart',this.widgetsGraphs);
  }


  transform() {
    let graphData = [];
    let cOptions=this.chartOptions;
          console.log('in transform', this.chart);
         graphData.push(cOptions);

          graphData[0]['chart']['type'] = 'lineChart';
          graphData[0]['chart']['useInteractiveGuideline'] = true;
          graphData[0]['chart'].xAxis = { axisLabel: 'Time (ms)' }
          graphData[0]['chart'].yAxis = {
            axisLabel: 'No of Forests',
            tickFormat: function (d) {
              return d3.format('.02f')(d);
            },
            axisLabelDistance: -10
          }
          
          let data=this.createLineChartData();
          graphData.push(data);
          this.widgetsGraphs.push(graphData);
      
        // case 1: //graphData.push(this.chartOptions);
        // //   graphData[0]['chart']['type'] = 'discreteBarChart';
        // //   graphData[0]['chart']['showValues'] = true;
        // //   graphData[0]['chart']['valueFormat'] = function (d) {
        // //     return d3.format(',.4f')(d);
        // //   };
        // //   graphData[0]['chart']['duration'] = 500;
        // //   graphData[0]['chart'].xAxis = {
        // //     axisLabel: 'X Axis'
        // //   }
        // //   graphData[0]['chart'].yAxis = {
        // //     axisLabel: 'Y Axis',
        // //     axisLabelDistance: -10
        // //   }
        // //   // graphData.push(this.chart[0]['Data']);
        // //   this.widgetsGraphs.push(graphData);
        //   break;
          // case 2:  graphData.push(this.chartOptions);
          // graphData[0]['chart']['type'] = 'discreteBarChart';
          // graphData[0]['chart']['showValues'] = true;
          // graphData[0]['chart']['valueFormat'] = function (d) {
          //    return d3.format(',.4f')(d);
          //  };
          //  graphData[0]['chart']['duration'] = 500;
          //  graphData[0]['chart'].xAxis = {
          //    axisLabel: 'X Axis'
          //  }
          //  graphData[0]['chart'].yAxis = {
          //    axisLabel: 'Y Axis',
          //    axisLabelDistance: -10
          //  }
          //  let bardata=this.createBarChartData();
          //  graphData.push(bardata);
          //  this.widgetsGraphs.push(graphData);
          // break;
     

    
    
  }

//     data: [
  //       {
  //         values: [{ x: 1, y: 5 }, { x: 5, y: 10 }, { x: 7, y: 8 }],      //values - represents the array of {x,y} data points
  //         key: 'Sine Wave', //key  - the name of the series.
  //         color: '#ff7f0e'  //color - optional: choose your own line color.
  //       },
  //       {
  //         values: [{ x: 2, y: 10 }, { x: 5, y: 5 }, { x: 7, y: 11 }],      //values - represents the array of {x,y} data points,
  //         key: 'Cosine Wave',
  //         color: '#2ca02c'
  //       },
  //       {
  //         values: [{ x: 3, y: 5 }, { x: 6, y: 11 }, { x: 7, y: 12 }],      //values - represents the array of {x,y} data points,
  //         key: 'Another sine wave',
  //         color: '#7777ff',
  //         area: true      //area - set to true if you want this line to turn into a filled area chart.
  //       }
  //     ]

  createLineChartData() {
    let data=[];
    console.log('in create', this.chart);
    this.chart.forEach(element => {
          let linedata={};
          linedata['values']=[];
          for(let i=1;i<=element.data.length;i++)
          {
            let tempdata={x:0,y:0};
            tempdata.x=i;
            tempdata.y=element.data[i-1].data.length;
            linedata['values'].push(tempdata);
          }
          linedata['key']=element.name;
          linedata['color']='#7777ff';
          data.push(linedata);
    });
          return data;
    
  }


  createBarChartData(){
    let data;
    data= [
        {
          key: "Cumulative Return",
          values: [
            {
              "label": "A",
              "value": 29.765957771107
            },
            {
              "label": "B",
              "value": 0
            },
            {
              "label": "C",
              "value": 32.807804682612
            },
            {
              "label": "D",
              "value": 196.45946739256
            },
            {
              "label": "E",
              "value": 0.19434030906893
            },
            {
              "label": "F",
              "value": 98.079782601442
            },
          ]
        }
      ]

      return data;
  }

  getWidgetClasses(widget) {
    return "w-" + widget.width + ' h-' + widget.height
  }
}
