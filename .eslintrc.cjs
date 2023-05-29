/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-undef': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/require-prop-types': 'off'
  }
}
