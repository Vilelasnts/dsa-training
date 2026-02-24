import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Regras recomendadas para JS
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

  // Testes (Jest): habilita test/expect/etc.
  {
    files: ["tests/**/*.{js,mjs,cjs}", "**/*.test.{js,mjs,cjs}", "**/*.spec.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },

  // CommonJS (se você estiver usando require/module.exports)
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]);