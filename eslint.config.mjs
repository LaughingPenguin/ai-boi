// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

// @ts-check

import { completeConfigBase } from "eslint-config-complete";
import { isaacScriptModConfigBase } from "eslint-config-isaacscript";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // https://github.com/complete-ts/complete/blob/main/packages/eslint-config-complete/src/base.js
  ...completeConfigBase,

  // https://github.com/IsaacScript/isaacscript/blob/main/packages/eslint-config-isaacscript/src/base.js
  ...isaacScriptModConfigBase,

  {
    files: ["scripts/**/*.ts"],
    rules: {
      "@typescript-eslint-no-unnecessary-condition": "off",
      "@typescript-eslint/await-thenable": "off",
    },
  },
);
