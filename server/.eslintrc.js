module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
