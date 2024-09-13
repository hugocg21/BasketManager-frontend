export interface Player {
  id: number;
  name: string;
  position: string;
  jerseyNumber: number;
  photoUrl: string;
  stats: {
    points: number;
    rebounds: number;
    assists: number;
  };
  attendance: {
    practices: number;
    games: number;
  };
  evolution: {
    pointsOverTime: number[];
    reboundsOverTime: number[];
    assistsOverTime: number[];
  };
}
