# ui-kit

## Coverage

[![codecov](https://codecov.io/gh/landingi/ui-kit/branch/master/graph/badge.svg?token=CZteQ5htwH)](https://codecov.io/gh/landingi/ui-kit)

Unit tests

![img](coverage/badge-branches.svg) ![img](coverage/badge-functions.svg)
![img](coverage/badge-lines.svg) ![img](coverage/badge-statements.svg)

## Getting Started

Landingi UI-kit is a set of react components used in the `landingi-app` and
`application`. Getting started is simple. Just add a `@landingi/landingi-ui-kit`
to your dependencies in `package.json`.

### Requirements

- [npm](https://www.npmjs.com/get-npm) >=7.0.0
- [Node.js](https://nodejs.org/en/download/) 14.8.0

### Quick Start

If you don't have installed Yarn execute:

`npm install --global yarn`

then to install project pacakges run in the project root:

`yarn`

#### Add a New component

1. Create a folder inside `src/shared/components/*`
2. Create `*.mdx` file and rest of the `js` files
3. In the `*.mdx` file add the following code:

```
import { Playground, Props } from 'docz'
import YourComponent from '@components/ui/YourComponent'

# YourComponent

<Props of={YourComponent} />

## Basic usage

<Playground>
  <YourComponent />
</Playground>
```

4. Export your component in `src/index.js`

```
export { default as YourComponent } from '@components/ui/YourComponent'
```

5. Run `yarn docz:dev` and open `http://localhost:3000`. Check if your component works as expected.

6. Run `yarn release-it`, stage all files

7. Push it

### Development

- `yarn docz:dev` - development and watch
- `yarn docz:build` - build
- `yarn docz:serve` - build and serve local server

### Recommended Development flow

- install this two vsc extensions: "MDX", "VSCode MDX"
- add this line to your settings.json

```
"eslint.options": {
    "extensions": [".js", ".jsx", ".mdx", ".ts", ".tsx"]
  },
  "eslint.validate": [
    "mdx",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
```

#### CI

Every push triggers CI pipeline. For more information please check `.github/workflows/ci.yml`

#### CD

In order to deploy you have to add `[deploy]` tag to your commit message, an
example: `[FRONT-123][deploy]I am just a fancy commit message`.

For more information please have a look at Project UI-kit in the Buddy website
or check `.github/workflows/cd.yml`

#### CD Documentation

In order to deploy you have to add `[docs]` tag to your commit message, an
example: `[FRONT-123][deploy][docs]I am just a fancy commit message`. Once you
push it, `Buddy` will execute the CI, CD and the CD related to documentation

For more information please have a look at Project UI-kit in the Buddy website
or check `.buddy/cd_docs.yml`
