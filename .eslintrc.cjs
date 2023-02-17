/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 12:25:00
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:45:13
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',

    //https://eslint.vuejs.org/rules/comment-directive.html
    'vue/comment-directive': 'off',
  },
};
