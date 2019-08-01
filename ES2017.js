'use strict';

module.exports = {
  extends: require('path').join(__dirname, 'ES2015'),
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'require-await': 'error'
  }
};
