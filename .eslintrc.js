module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    semi: ['error', 'always'],
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
