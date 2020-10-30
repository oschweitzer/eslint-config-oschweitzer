module.exports = {
  "root": true,
  "ignorePatterns": [
    "node_modules/",
    "dist/"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true,
    "jest": true
  },
  "rules": {
    "import/no-unresolved": "error",
    "import/export": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    // Require explicit accessibility modifiers on class properties and methods
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    // Require explicit return types on functions and class methods
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowHigherOrderFunctions": true
      }
    ],
    // Disallow generic Array constructors
    "@typescript-eslint/no-array-constructor": "error",
    // Disallow empty functions
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "never"
      }
    ],
    // Disallow the declaration of empty interfaces
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": false
      }
    ],
    // Disallow unnecessary constructors
    "@typescript-eslint/no-useless-constructor": "error",
    // Disallow unused variables
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ],
    // Warns if a type assertion does not change the type of an expression
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    // Disallow the use of parameter properties in class constructors
    "@typescript-eslint/no-parameter-properties": "off",
    // Disallows non-null assertions using the ! postfix operator
    "@typescript-eslint/no-non-null-assertion": "error",
    // Enforce valid definition of new and constructor
    "@typescript-eslint/no-misused-new": "error",
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    "@typescript-eslint/unified-signatures": "error",
    // Require consistent spacing around type annotations
    "@typescript-eslint/type-annotation-spacing": "error",
    // Boolean expressions are limited to booleans
    // Require or disallow semicolons instead of ASI
    "semi": "off",
    "@typescript-eslint/semi": [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": false
      }
    ],
    "prettier/prettier": "error",
    "indent": "off",
    "@typescript-eslint/indent": "off"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true
        // always try to resolve types under `<roo/>@types` directory even it doesn"t contain any source code, like `@types/unist`
      }
    }
  }
};
