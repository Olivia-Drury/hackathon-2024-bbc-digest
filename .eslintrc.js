module.exports = {
  root: true,
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:jest-formatting/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'func-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE']
      }
    ],
    'import/order': ['error', { alphabetize: { order: 'asc' } }]
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
