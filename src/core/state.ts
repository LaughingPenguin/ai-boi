import { EntityType } from "isaac-typescript-definitions";
import type { EntitySnapshot, GameState } from "./types";

export function collectGameState(): GameState {
  const game = Game();
  const room = game.GetRoom();
  const level = game.GetLevel();
  const player = Isaac.GetPlayer();

  const entities: EntitySnapshot[] = [];
  for (const entity of Isaac.GetRoomEntities()) {
    entities.push({
      type: entity.Type,
      variant: entity.Variant,
      subType: entity.SubType,
      position: entity.Position,
      velocity: entity.Velocity,
      isFriendly: EntityRef(entity).IsFriendly,
      isPlayer: entity.Type === EntityType.PLAYER,
    });
  }

  return {
    frameCount: game.GetFrameCount(),
    levelName: level.GetName(),
    roomShape: room.GetRoomShape(),
    player: {
      position: player.Position,
      velocity: player.Velocity,
      health: player.GetHearts(),
    },
    entities,
  };
}
