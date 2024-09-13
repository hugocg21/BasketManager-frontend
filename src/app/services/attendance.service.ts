import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private attendance = {
    practices: 10,
    games: 3,
  };

  constructor() {}

  getAttendanceByPlayerId(playerId: number): Observable<{ practices: number; games: number }> {
    return of(this.attendance);
  }
}
