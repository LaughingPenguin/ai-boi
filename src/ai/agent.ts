import { VectorZero } from "isaacscript-common";
import type { GameState, Plan } from "../core/types";

export interface Agent {
  decide: (state: GameState) => Plan;
}

export class IdleAgent implements Agent {
  public decide(_state: GameState): Plan {
    return { goal: { type: "idle" }, movement: VectorZero };
  }
}
