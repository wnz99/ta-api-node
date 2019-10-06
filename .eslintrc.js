module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-restricted-imports': [
      2,
      {
        paths: ['lodash']
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  env: {
    browser: true,
    jest: true
  },
  globals: {
    cy: true,
    before: true
  }
};
