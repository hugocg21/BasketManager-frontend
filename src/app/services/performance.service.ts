import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private performance = {
    pointsOverTime: [10, 12, 15],
    reboundsOverTime: [3, 4, 5],
    assistsOverTime: [5, 6, 7],
  };

  constructor() {}

  getPerformanceByPlayerId(playerId: number): Observable<{
    pointsOverTime: number[];
    reboundsOverTime: number[];
    assistsOverTime: number[];
  }> {
    return of(this.performance);
  }
}
