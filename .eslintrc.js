module.exports = {
	env: {
		node: true,
		commonjs: true,
		browser: true,
		es6: true,
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				parser: "flow",
				useTabs: true,
				tabWidth: 4,
				endOfLine: "auto",
			},
		],
		indent: ["warn", "tab"],
	},
};
