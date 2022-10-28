/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'linebreak-style': ['error', 'windows'],
		'prettier/prettier': [
			'error',
			{
				semi: true,
				singleQuote: true,
				useTabs: true,
				endOfLine: 'auto' /* this setting should be included */,
			},
		],
	},
};
