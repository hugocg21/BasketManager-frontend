import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { AttendanceService } from '../../services/attendance.service';
import { PerformanceService } from '../../services/performance.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
})
export class PlayerProfileComponent implements OnInit {
  player: Player | undefined;
  attendance: { practices: number; games: number } | undefined;
  performance: | {
    pointsOverTime: number[];
    reboundsOverTime: number[];
    assistsOverTime: number[];
  } | undefined;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private attendanceService: AttendanceService, private performanceService: PerformanceService) {}

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));

    this.playerService.getPlayerById(playerId).subscribe((data) => {
      this.player = data;
    });

    this.attendanceService.getAttendanceByPlayerId(playerId).subscribe((data) => {
      this.attendance = data;
    });

    this.performanceService.getPerformanceByPlayerId(playerId).subscribe((data) => {
      this.performance = data;
    });
  }
}
