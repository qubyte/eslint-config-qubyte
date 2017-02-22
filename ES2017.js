'use strict';

module.exports = {
  extends: 'eslint-config-qubyte/ES2015',
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'require-await': 'error'
  }
};
