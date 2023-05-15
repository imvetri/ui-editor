'use strict';

module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // We are not consistent enough to enable this rule.
    'unicorn/filename-case': 'off',
    // Flags i,j,k, etc.
    'unicorn/prevent-abbreviations': 'off',
    // TODO: create issue about risk (>32bit integers)
    'unicorn/prefer-math-trunc': 'off',
    // We prefer Array.from(x) over [...x]
    'unicorn/prefer-spread': 'off',
    // We prefer new Array(x).fill() over Array.from({ length: x })
    'unicorn/no-new-array': 'off',
    // We don't like separators after the comma
    'unicorn/numeric-separators-style': 'off',
    // For loop is used sometimes for performance.
    'unicorn/no-for-loop': 'off',
    // We use null in many places.
    'unicorn/no-null': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-type-error': 'off',
    // Might want to enable in a future semver-major.
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-useless-undefined': 'off',
    // Conflicts with Prettier.
    'unicorn/number-literal-case': 'off',
    // Too early for full ESM
    'unicorn/prefer-module': 'off',
    // Conflicts with Prettier.
    'unicorn/no-nested-ternary': 'off',
    // Problematic with useOnOff
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/prefer-regexp-test': 'off',
    // Unfortunately too annoying on valid cases + conflicts with TS.
    'unicorn/no-array-callback-reference': 'off',
    // May conflict with other rule + ugly switch(0) auto-fix.
    'unicorn/prefer-switch': 'off',
    // Rare and problematic with APIs that have a find method.
    'unicorn/no-array-method-this-argument': 'off',
  },
};
