module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/all", // too strict for now
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
  rules: {
    '@typescript-eslint/typedef': [
      'error',
      {
        variableDeclaration: false,
        arrowParameter: true,
        arrayDestructuring: false,
        memberVariableDeclaration: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
      },
    ],
  },
};
