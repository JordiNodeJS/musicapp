# Musicapp in Progress 👷‍♂️

## For developers
### Tech stack
#### Vite
`npm create vite@latest ./`

```bash
  npm install
  npm run dev
```

#### initialize eslint
```
npm install -D eslint
npx eslint --init
```
#### Copy those rules in `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
```
#### Scripts package json
 Add these scripts to package.json if you want to format all project or current folder
```json
  "scripts": {
    ...
    "lint": "eslint .",
    "lint:fix": "eslint . --fix --ext .js,.jsx,.ts,.tsx"
  },

```

# Install Redux Toolkit and React-Redux

which is a peer dependency

`npm install @reduxjs/toolkit react-redux`
Continues with [Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
