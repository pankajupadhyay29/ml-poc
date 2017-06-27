import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() data: any;
  @Input() options: any;
  @Input() chartData: any;

  constructor() { }

  ngOnInit() {
  }  
}
