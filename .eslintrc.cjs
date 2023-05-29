/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/v-on-event-hyphenation': 'off'
  }
}
