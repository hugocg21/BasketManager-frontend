import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-attendance',
  templateUrl: './player-attendance.component.html',
})
export class PlayerAttendanceComponent {
  @Input() attendance!: { practices: number; games: number };
}
