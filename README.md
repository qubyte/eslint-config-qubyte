# eslint-config-qubyte

Common ESLint [shareable config][1] files for qubyte. Originally based on
[eslint-config-vizia][2].

Install into your project:

```
npm install --save eslint eslint-config-qubyte
```

# Example uses:

## ES5 browser project.

Make a `.eslintrc.json` config file with the following in:

```javascript
{
    "env": {
        "browser": true
    }
    "extends": "qubyte"
}
```

You must specify your environment in the `"env"` part. You can also customize
rules as you like.

[1]: http://eslint.org/docs/developer-guide/shareable-configs
[2]: https://github.com/vizia/eslint-config-vizia

## ES2015 Node.js project.

As before the environment needs to be specified. Since Node 6+ has good ES2015
feature coverage, it makes sense to use ES2015 features. A sharable config is
provided for ES2015 code:

```javascript
{
    "env": {
        "node": true
    }
    "extends": "qubyte/ES2015"
}
```

Internally this config extends the base qubyte config.

## Tests

Tests often look like bad code. They're prone to many more lines of code per
file than healthy production code etc. It's recommended to have a
`.eslintrc.json` file in your test directory to address this. ESLint extends a
config found in a directory above automatically, so you only need to turn off
rules that become noisy in tests. Such a file might look like:

```javascript
{
    "env": {
        "mocha": true
    },
    "rules": {
        "max-statements": 'off',
        "max-lines": 'off'
    }
}
```
