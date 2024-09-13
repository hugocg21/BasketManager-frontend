import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      position: 'Base',
      jerseyNumber: 4,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 15, rebounds: 5, assists: 7 },
      attendance: { practices: 10, games: 3 },
      evolution: {
        pointsOverTime: [10, 12, 15],
        reboundsOverTime: [3, 4, 5],
        assistsOverTime: [5, 6, 7],
      },
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Alero',
      jerseyNumber: 8,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 20, rebounds: 7, assists: 9 },
      attendance: { practices: 12, games: 4 },
      evolution: {
        pointsOverTime: [14, 18, 20],
        reboundsOverTime: [4, 6, 7],
        assistsOverTime: [7, 8, 9],
      },
    },
    {
      id: 3,
      name: 'Pedro Gutiérrez',
      position: 'Pivot',
      jerseyNumber: 12,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 25, rebounds: 10, assists: 4 },
      attendance: { practices: 14, games: 5 },
      evolution: {
        pointsOverTime: [18, 22, 25],
        reboundsOverTime: [8, 9, 10],
        assistsOverTime: [3, 4, 4],
      },
    },
    {
      id: 4,
      name: 'Luis Fernández',
      position: 'Escolta',
      jerseyNumber: 9,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 12, rebounds: 3, assists: 5 },
      attendance: { practices: 9, games: 3 },
      evolution: {
        pointsOverTime: [10, 11, 12],
        reboundsOverTime: [2, 3, 3],
        assistsOverTime: [4, 5, 5],
      },
    },
    {
      id: 5,
      name: 'José Martínez',
      position: 'Base',
      jerseyNumber: 7,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 17, rebounds: 6, assists: 8 },
      attendance: { practices: 11, games: 4 },
      evolution: {
        pointsOverTime: [12, 15, 17],
        reboundsOverTime: [5, 6, 6],
        assistsOverTime: [6, 7, 8],
      },
    },
    {
      id: 6,
      name: 'Miguel Ramírez',
      position: 'Alero',
      jerseyNumber: 11,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 23, rebounds: 8, assists: 6 },
      attendance: { practices: 13, games: 6 },
      evolution: {
        pointsOverTime: [18, 21, 23],
        reboundsOverTime: [7, 7, 8],
        assistsOverTime: [5, 6, 6],
      },
    },
    {
      id: 7,
      name: 'Roberto López',
      position: 'Pivot',
      jerseyNumber: 13,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 28, rebounds: 12, assists: 5 },
      attendance: { practices: 16, games: 7 },
      evolution: {
        pointsOverTime: [22, 25, 28],
        reboundsOverTime: [10, 11, 12],
        assistsOverTime: [4, 5, 5],
      },
    },
    {
      id: 8,
      name: 'Andrés Jiménez',
      position: 'Escolta',
      jerseyNumber: 10,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 19, rebounds: 4, assists: 7 },
      attendance: { practices: 12, games: 5 },
      evolution: {
        pointsOverTime: [16, 18, 19],
        reboundsOverTime: [3, 4, 4],
        assistsOverTime: [6, 7, 7],
      },
    },
    {
      id: 9,
      name: 'Alberto Ruiz',
      position: 'Alero',
      jerseyNumber: 5,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 26, rebounds: 9, assists: 7 },
      attendance: { practices: 15, games: 6 },
      evolution: {
        pointsOverTime: [20, 23, 26],
        reboundsOverTime: [7, 8, 9],
        assistsOverTime: [6, 6, 7],
      },
    },
    {
      id: 10,
      name: 'Ricardo Moreno',
      position: 'Base',
      jerseyNumber: 3,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 14, rebounds: 4, assists: 9 },
      attendance: { practices: 10, games: 4 },
      evolution: {
        pointsOverTime: [10, 12, 14],
        reboundsOverTime: [3, 4, 4],
        assistsOverTime: [7, 8, 9],
      },
    },
    {
      id: 11,
      name: 'Manuel Navarro',
      position: 'Pivot',
      jerseyNumber: 15,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 22, rebounds: 11, assists: 6 },
      attendance: { practices: 13, games: 5 },
      evolution: {
        pointsOverTime: [16, 19, 22],
        reboundsOverTime: [9, 10, 11],
        assistsOverTime: [5, 6, 6],
      },
    },
    {
      id: 12,
      name: 'Daniel Ortega',
      position: 'Escolta',
      jerseyNumber: 6,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 18, rebounds: 5, assists: 8 },
      attendance: { practices: 11, games: 5 },
      evolution: {
        pointsOverTime: [14, 16, 18],
        reboundsOverTime: [4, 5, 5],
        assistsOverTime: [6, 7, 8],
      },
    },
    {
      id: 13,
      name: 'Francisco Gómez',
      position: 'Alero',
      jerseyNumber: 14,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 24, rebounds: 10, assists: 7 },
      attendance: { practices: 14, games: 6 },
      evolution: {
        pointsOverTime: [19, 22, 24],
        reboundsOverTime: [8, 9, 10],
        assistsOverTime: [6, 7, 7],
      },
    },
    {
      id: 14,
      name: 'Eduardo Torres',
      position: 'Base',
      jerseyNumber: 1,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 16, rebounds: 6, assists: 10 },
      attendance: { practices: 12, games: 5 },
      evolution: {
        pointsOverTime: [12, 14, 16],
        reboundsOverTime: [5, 6, 6],
        assistsOverTime: [8, 9, 10],
      },
    },
    {
      id: 15,
      name: 'Antonio Sánchez',
      position: 'Pivot',
      jerseyNumber: 2,
      photoUrl: 'https://via.placeholder.com/150',
      stats: { points: 30, rebounds: 14, assists: 4 },
      attendance: { practices: 18, games: 8 },
      evolution: {
        pointsOverTime: [25, 27, 30],
        reboundsOverTime: [11, 13, 14],
        assistsOverTime: [3, 4, 4],
      },
    },
  ];

  constructor() {}

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getPlayerById(id: number): Observable<Player | undefined> {
    const player = this.players.find((p) => p.id === id);
    return of(player);
  }

  addPlayer(player: Player): Observable<Player> {
    player.id = this.players.length + 1;
    this.players.push(player);
    return of(player);
  }

  deletePlayer(id: number): Observable<boolean> {
    this.players = this.players.filter((player) => player.id !== id);
    return of(true);
  }

  editPlayer(updatedPlayer: Player): Observable<Player> {
    const index = this.players.findIndex((p) => p.id === updatedPlayer.id);
    if (index !== -1) {
      this.players[index] = updatedPlayer;
    }
    return of(updatedPlayer);
  }
}
