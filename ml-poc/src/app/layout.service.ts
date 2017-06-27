import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
  tiles = [
    { text: 'Top', cols: 12, rows: 1, color: 'lightblue' },
    { text: 'Menu', cols: 1, rows: 8, color: 'lightgreen' },
    { text: 'Content', cols: 11, rows: 8, color: 'lightpink' },
  ];

  widgets = [
    { id: 0, title: 'Request Rate Trend', height: 2, width: 1, settings: {} },
    { id: 1, title: 'DB Availability Trend', height: 2, width: 1, settings: {} },
    { id: 2, title: 'Memory Uses(Top 5)', height: 2, width: 1, settings: {} },
    { id: 3, title: 'Recent', height: 1, width: 1, settings: {} },
    { id: 4, title: 'Quick Links', height: 1, width: 1, settings: {} },
  ];

  chart =[ {
    options: {
      chart: {
        type: 'discreteBarChart',
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    },
    data: [
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
  },
   {
    options: {
      chart: {
        type: 'discreteBarChart',
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    },
    data: [
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
            "value": -32.807804682612
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
            "value": -98.079782601442
          },
        ]
      }
    ]
  },
   {
    options: {
      chart: {
        type: 'discreteBarChart',
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    },
    data: [
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
  }
  // {
  //   options : {
  //     chart: {
  //       type: 'lineChart',
  //       useInteractiveGuideline: true,
  //       height: 350,
  //       transitionDuration: 50,
  //       showLegend: false,
  //       margin: {
  //         top: 20,
  //         right: 20,
  //         bottom: 40,
  //         left: 55
  //       },
  //       x: (d) => { return d.x; },
  //       y: (d) => { return d.y; },
  //       xScale: d3.time.scale(),
  //       xAxis: {
  //         ticks: d3.time.months,
  //         tickFormat: (d) => {
  //             return d3.time.format('%b')(new Date(d));
  //         }
  //       },
  //       yAxis: {
  //         axisLabel: 'Gross volume',
  //         tickFormat: (d) => {
  //             if (d == null) {
  //                 return 0;
  //             }
  //             return d3.format('.02f')(d);
  //         },
  //         axisLabelDistance: 100
  //       }
  //     }
  //   },

  //   data : [
  //     {
  //       key: "Cumulative Return",
  //       values: [
  //         {
  //           "label" : "A" ,
  //           "value" : -29.765957771107
  //         } ,
  //         {
  //           "label" : "B" ,
  //           "value" : 0
  //         } ,
  //         {
  //           "label" : "C" ,
  //           "value" : 32.807804682612
  //         } ,
  //       ]
  //       }
  //   ]
  // }
  ];


  constructor() { }

  getChartData(){
    return this.chart;
  }

  getMainLayout() {
    return this.tiles;
  }

  getWidgetLayout() {
    return this.widgets;
  }

}
