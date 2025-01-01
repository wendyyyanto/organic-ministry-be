// @ts-check

import eslint from "@eslint/js";
import tseslint, { parser } from "typescript-eslint";

export default {
	parser: parser,
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error"
	}
};
