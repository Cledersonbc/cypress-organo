module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:cypress/recommended',
		'plugin:chai-friendly/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/no-force': 'warn',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'import/no-commonjs': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ExportDefaultDeclaration',
				message: 'Only `module.exports` is allowed.',
			},
			{
				selector: 'ExportNamedDeclaration[declaration.type!="VariableDeclaration"]',
				message: 'Only `module.exports` is allowed.',
			},
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
