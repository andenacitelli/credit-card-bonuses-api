const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
  rules: {

    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Rules I feel are too strict, but still worth a warning
    "@typescript-eslint/ban-ts-comment": "warn"
  },
  ignorePatterns: ["node_modules", "dist", "build"],
});
