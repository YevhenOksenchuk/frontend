module.exports = {
  root: true,
  env: {
    "es6": true,
    "browser": true,
    "node": true
  },
  plugins: [
    '@typescript-eslint',
    'redux-saga',
  ],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:redux-saga/recommended',
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  // add your custom rules here
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-throw-literal': 0,
    'max-len': 'off',
    'import/no-dynamic-require': 'off',
    'no-multi-assign': 0,
    'vue/valid-v-on': 0,
    'one-var': 0,
    'no-param-reassign': 0,
    'no-prototype-builtins': 0,
    'no-console': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-extraneous-dependencies': 0,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
    'vue/return-in-computed-property': 0,
    'no-return-assign': 0,
    'vue/order-in-components': 0,
    'vue/no-v-html': 0,
    'no-mixed-operators': 0,
    'no-shadow': 0,
    'prefer-destructuring': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'no-restricted-globals': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'no-bitwise': 0,
    'vue/singleline-html-element-content-newline': 0,
    'object-curly-newline': 0,
    'func-names': 0,
    'arrow-parens': 0,
    'no-return-await': 0,
    'consistent-return': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'array-callback-return': 0,
    'no-inner-declarations': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
  },

  globals: {
    _: true,
    google: true,
  },

  parserOptions: {
  parser: '@typescript-eslint/parser',
    'sourceType': 'module',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
