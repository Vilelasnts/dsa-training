import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([

  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["tests/**/*.{js,mjs,cjs}", "**/*.test.{js,mjs,cjs}", "**/*.spec.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  eslintConfigPrettier,
]);
