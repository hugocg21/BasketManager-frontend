import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  sortAttribute: string = 'name';
  isAscending: boolean = true;
  newPlayer: Player = {
    id: 0,
    name: '',
    position: '',
    jerseyNumber: 0,
    photoUrl: '',
    stats: { points: 0, rebounds: 0, assists: 0 },
    attendance: { practices: 0, games: 0 },
    evolution: {
      pointsOverTime: [],
      reboundsOverTime: [],
      assistsOverTime: [],
    },
  };
  editingPlayer: Player | null = null;

  positionPriority: { [key: string]: number } = {
    Base: 1,
    Escolta: 2,
    Alero: 3,
    'Ala-pivot': 4,
    Pivot: 5,
  };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
      this.sortPlayers();
    });
  }

  sortPlayers(): void {
    this.players.sort((a, b) => {
      if (this.sortAttribute === 'position') {
        const priorityA = this.positionPriority[a.position] || 999;
        const priorityB = this.positionPriority[b.position] || 999;
        return this.isAscending ? priorityA - priorityB : priorityB - priorityA;
      }

      const valueA = this.getNestedProperty(a, this.sortAttribute);
      const valueB = this.getNestedProperty(b, this.sortAttribute);

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.isAscending ? valueA - valueB : valueB - valueA;
      }
      return 0;
    });
  }

  getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
  }

  onSortAttributeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const attribute = target?.value;

    if (attribute) {
      this.sortAttribute = attribute;
      this.sortPlayers();
    }
  }

  toggleSortOrder(): void {
    this.isAscending = !this.isAscending;
    this.sortPlayers();
  }

  addPlayer(): void {
    this.playerService.addPlayer(this.newPlayer).subscribe((player) => {
      this.players.push(player);
      this.resetForm();
      this.sortPlayers();
    });
  }

  deletePlayer(id: number): void {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.players = this.players.filter((player) => player.id !== id);
      this.sortPlayers();
    });
  }

  editPlayer(player: Player): void {
    this.editingPlayer = { ...player };
  }

  saveEdit(): void {
    if (this.editingPlayer) {
      this.playerService.editPlayer(this.editingPlayer).subscribe((updatedPlayer) => {
        const index = this.players.findIndex((p) => p.id === updatedPlayer.id);
        if (index !== -1) {
          this.players[index] = updatedPlayer;
        }
        this.editingPlayer = null;
        this.sortPlayers();
      });
    }
  }

  cancelEdit(): void {
    this.editingPlayer = null;
  }

  resetForm(): void {
    this.newPlayer = {
      id: 0,
      name: '',
      position: '',
      jerseyNumber: 0,
      photoUrl: '',
      stats: { points: 0, rebounds: 0, assists: 0 },
      attendance: { practices: 0, games: 0 },
      evolution: {
        pointsOverTime: [],
        reboundsOverTime: [],
        assistsOverTime: [],
      },
    };
  }
}
