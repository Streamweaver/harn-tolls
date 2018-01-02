import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  leagues: number;  // 1 league = 2.5 miles, 4km
  hexes: number; // 1 hex = 5 leagues
  miles: number;
  km: number;

  constructor() { }

  ngOnInit() {
    this.leagues = 5;
    this.onLeagueChange();
  }

  onLeagueChange() {
    this.hexes = this.leagues / 5;
    this.miles = this.leagues * 2.5;
    this.km = this.leagues * 4;
  }

  onHexesChange() {
    this.leagues = this.hexes * 5;
    this.miles = this.hexes * 12.5;
    this.km = this.hexes * 20;
  }

  onMilesChange() {
    this.leagues = this.miles / 2.5;
    this.hexes = this.miles / 12.5;
    this.km = this.miles * 1.6;
  }

  onKilometersChange() {
    this.leagues = this.km / 4;
    this.hexes = this.km / 20;
    this.miles = this.km * 0.625;
  }


}
