'use strict';

module.exports = {
  env: {
    es6: true,
    es2022: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  plugins: ['import'],
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      // .cjs files are always for Node.js and must be of type script.
      files: ['*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
    },
    {
      // .mjs files must be of type module.
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      // Configuration files are usually for Node.js modules.
      files: ['*.config.{js,cjs,mjs,ts,cts,mts}'],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    // https://eslint.org/docs/rules/
    // Last rules review: v8.26.0

    // https://github.com/import-js/eslint-plugin-import#rules
    // Last rules review: v2.26.0

    //#region Possible Problems (https://eslint.org/docs/rules/#possible-problems)
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': ['error', { includeExports: false }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off', // See https://github.com/eslint/eslint/issues/11899
    'use-isnan': 'error',
    'valid-typeof': 'error',
    //#endregion

    //#region Suggestions (https://eslint.org/docs/rules/#suggestions)
    'block-scoped-var': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'allow-null'],
    'func-names': 'error',
    'grouped-accessor-pairs': 'error',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-console': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-empty': 'error',
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    // Conflicts with typescript-eslint's no-floating-promises rule.
    'no-void': 'off',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'prefer-named-capture-group': 'warn',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'warn',
    'require-yield': 'error',
    strict: ['error', 'global'],
    'symbol-description': 'error',
    yoda: 'error',
    //#endregion

    //#region Layout & Formatting (https://eslint.org/docs/rules/#layout-formatting)
    camelcase: ['error', { properties: 'always', ignoreDestructuring: true }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],
    'unicode-bom': 'error',
    'wrap-iife': ['error', 'inside'],
    //#endregion

    //#region Import plugin (https://github.com/import-js/eslint-plugin-import#rules)
    // Static analysis
    'import/named': 'error',
    'import/default': 'warn',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'warn',

    // Module systems
    'import/no-amd': 'error',

    // Style guide
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unassigned-import': [
      'warn',
      {
        allow: [
          'make-promises-safe',
          'node-report',
          'reflect-metadata',
          '**/*.css',
          'react-app-polyfill/*',
        ],
      },
    ],
    'import/no-named-default': 'error',
    //#endregion
  },
};
