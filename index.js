module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    node: true,
    jest: true
  },
  rules: {
    // Require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' }
    ],
    // Enforce camelCase naming convention
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    // Require PascalCased class and interface names
    '@typescript-eslint/class-name-casing': 'error',
    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true
      }
    ],
    // Require that interface names be prefixed with I
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',
    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: false }
    ],
    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'error',
    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // Disallow the use of parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': 'off',
    // Disallows non-null assertions using the ! postfix operator
    '@typescript-eslint/no-non-null-assertion': 'error',
    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'error',
    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': 'error',
    // Boolean expressions are limited to booleans
    // Require or disallow semicolons instead of ASI
    semi: 'off',
    '@typescript-eslint/semi': [
      'error',
      'always',
      { omitLastInOneLineBlock: false }
    ],
    'prettier/prettier': 'error',
    indent: 'off',
    '@typescript-eslint/indent': 'off'
  }
};
