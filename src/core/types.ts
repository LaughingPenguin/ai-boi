import type { EntityType, RoomShape } from "isaac-typescript-definitions";

export interface EntitySnapshot {
  type: EntityType;
  variant: int;
  subType: int;
  position: Vector;
  velocity: Vector;
  isFriendly: boolean;
  isPlayer: boolean;
}

interface PlayerSnapshot {
  position: Vector;
  velocity: Vector;
  health: number;
}

// Everything the AI is allowed to know about the world.
export interface GameState {
  frameCount: int;
  levelName: string;
  roomShape: RoomShape;
  player: PlayerSnapshot;
  entities: EntitySnapshot[];
}

interface Goal {
  type: "idle";
}

export interface Plan {
  goal: Goal;
  movement: Vector; // zero = don't move
  note?: string;
}
