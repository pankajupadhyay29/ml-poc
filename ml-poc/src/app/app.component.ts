import { Component, OnInit } from '@angular/core';
 import { getSportData } from './data';

import { Hero } from './hero';
import { HeroService } from './hero.service';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My Heroes</h2>
  //   <ul class="heroes">
  //     <li *ngFor="let hero of heroes"
  //       [class.selected]="hero === selectedHero"
  //       (click)="onSelect(hero)">
  //       <span class="badge">{{hero.id}}</span> {{hero.name}}
  //     </li>
  //   </ul>
  //   <hero-detail [hero]="selectedHero"></hero-detail>
  // `,
  
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Databases';
  heroes: Hero[];
  selectedHero: Hero;
    private data: any[];
  private colHeaders: string[];
  private options: any;


 
  // constructor(private heroService: HeroService) { }
 
//   getHeroes(): void {
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
//  
//   ngOnInit(): void {
//     this.getHeroes();
//   }
//  
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

   constructor() {
    this.data = getSportData();
    this.colHeaders = ['DATABASE NAME', 'RELATED DATABASES', 'FORESTS', 'APP SERVERS'];
    this.options = {
      height: 600,
      rowHeaders: false,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'text'},
        {data: 1, type: 'text'},
        {data: 2, type: 'text'},
        {data: 3, type: 'text'},
      ],
      cells: (row, col, prop) => {
        const cellProperties: any = {};
        cellProperties.className = 'htMiddle htCenter';

        return cellProperties;
      }
    };
}
}
