import { Keyboard, ModCallback } from "isaac-typescript-definitions";
import {
  ISCFeature,
  ModCallbackCustom,
  log,
  setLogFunctionsGlobal,
  upgradeMod,
} from "isaacscript-common";
import { name } from "../package.json";
import type { Agent } from "./ai/agent";
import { IdleAgent } from "./ai/agent";
import { collectGameState } from "./core/state";

// This function is run when your mod first initializes.
export function main(): void {
  const modVanilla = RegisterMod(name, 1);
  const mod = upgradeMod(modVanilla, [ISCFeature.CUSTOM_HOTKEYS] as const);
  setLogFunctionsGlobal();

  const agent: Agent = new IdleAgent();

  mod.AddCallback(ModCallback.POST_UPDATE, () => {
    const state = collectGameState();
    agent.decide(state);
  });

  mod.AddCallbackCustom(ModCallbackCustom.POST_NEW_ROOM_REORDERED, () => {
    const state = collectGameState();
    log(
      `Entered room on floor "${state.levelName}" with ${state.entities.length} entities`,
    );
  });

  mod.setHotkey(Keyboard.F2, () => {
    log("Key pressed - F2");
  });

  log(`${name} initialized`);
}
