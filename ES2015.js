'use strict';

module.exports = {
  extends: 'eslint-config-qubyte',
  env: {
    es6: true
  },
  rules: {
    'no-var': 'error',
    'no-loop-func': 'off',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after'],
    'lines-between-class-members': ['error', 'always'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'template-tag-spacing': ['error', 'never']
  }
};
