import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  languageOptions: {
    parser, // Parser de TypeScript
    parserOptions: {
      ecmaVersion: "latest", // Soporte para ES2020+
      sourceType: "module", // Usa módulos ES
      project: "./tsconfig.json", // Archivo de configuración de TypeScript
      tsconfigRootDir: process.cwd(), // Ruta base
    },
    globals: {
      ...globals.browser, // Soporte para APIs de navegador (DOM, fetch, etc.)
    },
  },
  plugins: {
    "@typescript-eslint": tseslint, // Plugin de TypeScript
  },
  rules: {
    // Reglas recomendadas
    ...pluginJs.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    // Reglas personalizadas
    "semi": ["error", "always"], // Fuerza el uso de punto y coma
    "quotes": ["error", "single"], // Fuerza el uso de comillas simples
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignora variables que comiencen con _
    "no-console": "warn", // Advertencia para `console.log`
  },
};
