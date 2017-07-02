import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  recents: any
  interval: any;
  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.loadRecent = this.loadRecent.bind(this);
    this.loadRecent();
    this.interval = setInterval(this.loadRecent, 30 * 1000);
  }

  loadRecent(){
    this.dbService.getRecent().subscribe (result => {
        this.recents = result;
        //this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
