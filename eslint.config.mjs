// @ts-check

import { parser } from "typescript-eslint";

export default {
    parser: parser,
    parserOptions: {
        ecmaVersion: "latest",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier",
    ],
    plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
    rules: {
        "no-unused-vars": "warn",
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": "error",
    },
};
