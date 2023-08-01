module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'prettier'],
  rules: {
    "prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"endOfLine": "auto",
				"tabWidth": 4,
				"useTabs": false,
				"printWidth": 100,
                "trailingComma": "none",
                "semi": true

			}
		],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
