import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.component.html',
})
export class PlayerPerformanceComponent implements OnChanges {
  @Input() player!: Player;

  public lineChartData: ChartData<'line'> = {
    labels: ['Inicio', 'Mitad de temporada', 'Final'],
    datasets: [],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: '#E0E0E0',
        },
      },
      x: {
        ticks: {
          color: '#E0E0E0',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#E0E0E0',
        },
      },
    },
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player'] && this.player) {
      this.updateChartData();
    }
  }

  updateChartData(): void {
    this.lineChartData.datasets = [
      {
        data: this.player.evolution.pointsOverTime,
        label: 'Puntos',
        borderColor: '#BB86FC',
        backgroundColor: 'rgba(187, 134, 252, 0.5)',
        fill: true,
      },
      {
        data: this.player.evolution.reboundsOverTime,
        label: 'Rebotes',
        borderColor: '#1DB954',
        backgroundColor: 'rgba(29, 185, 84, 0.5)',
        fill: true,
      },
      {
        data: this.player.evolution.assistsOverTime,
        label: 'Asistencias',
        borderColor: '#CF6679',
        backgroundColor: 'rgba(207, 102, 121, 0.5)',
        fill: true,
      },
    ];
  }
}
