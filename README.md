# eslint-config-oschweitzer

## Description

Set of TypeScript rules for eslint.

## Usage

On your TypeScript application,

1. Install the necessary dependencies:

   `npm i -D eslint eslint-import-resolver-typescript eslint-config-oschweitzer eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`

2. Create a file named `.eslintrc.js` and paste the following code

   ```javascript
   module.exports = {
     extends: ['eslint-config-oschweitzer']
   };
   ```

3. Add a .prettierrc file in the root directory with the following content

   ```json
   {
     "singleQuote": true,
     "trailingComma": "all"
   }
   ```

4. In your package.json, add these two scripts lines:

   ```json
   {
     ...
     "scripts": {
       ...
       "lint": "npx eslint . --ext .ts,.tsx",
       "lint:fix": "npx eslint --fix . --ext .ts,.tsx",
       ...
     },
     ...
   }
   ```

Now run `npm run lint` to check if everything went well.

> This linter will not work on JavaScript code.
