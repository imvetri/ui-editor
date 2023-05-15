# eslint-config-cheminfo

Shared ESLint config for cheminfo and ml.js projects.

## Installation

```console
npm i -D eslint-config-cheminfo eslint
```

## Usage

Create a `.eslintrc.yml` with the following contents:

```yml
extends: [cheminfo, cheminfo/jsdoc, cheminfo/unicorn]
```

You can then customize the config for your project by changing rules in this file.

Create ESLint scripts in your `package.json`:

```json
{
  "scripts": {
    "eslint": "eslint src",
    "eslint-fix": "npm run eslint -- --fix"
  }
}
```

## Extensions of this config

### TypeScript

https://github.com/cheminfo/eslint-config-cheminfo-typescript

## React

https://github.com/cheminfo/eslint-config-cheminfo-react

## TypeScript and React

You can extend both of the above configurations as they are compatible between each other:

```yml
extends:
  - cheminfo-typescript
  - cheminfo-react
```
