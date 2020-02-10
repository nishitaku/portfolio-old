module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    semi: ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
