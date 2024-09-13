import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.component.html',
})
export class MatchStatsComponent implements OnInit {
  matchStats = Array.from({ length: 15 }, (v, i) => ({
    gameId: i + 1,
    points: Math.floor(Math.random() * 100),
    fouls: Math.floor(Math.random() * 20),
    assists: Math.floor(Math.random() * 30),
  }));

  ngOnInit(): void {
    console.log(this.matchStats);
  }
}
