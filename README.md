# eslint-config-qubyte

Common ESLint [shareable config][1] files for qubyte. Originally based on
[eslint-config-vizia][2].

Install into your project:

```shell
npm install --save eslint eslint-config-qubyte
```

# Example uses:

## ES5 browser project.

Make a `eslintrc.config.js` config file with the following in:

```js
import config from 'eslint-config-qubyte';

export default [
  config
];
```

Globals can be imported from
[the globals package](https://www.npmjs.com/package/globals). An example which
uses custom language options and globals might look like:

```js
import globals from "globals";
import config from 'eslint-config-qubyte';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
    }
  },
  config
];
```
