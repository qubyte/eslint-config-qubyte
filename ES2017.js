'use strict';

module.exports = {
  extends: require('path').join(__dirname, 'ES2015'),
  env: {
    es2017: true
  },
  rules: {
    'require-await': 'error'
  }
};
