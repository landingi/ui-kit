# ui-kit

## Coverage

Unit tests

![img](coverage/badge-branches.svg) ![img](coverage/badge-functions.svg)
![img](coverage/badge-lines.svg) ![img](coverage/badge-statements.svg)

## Getting Started

Landingi UI-kit is a set of react components. Getting started is simple. Just
add a `@landingi/landingi-ui-kit` to your dependencies in `package.json`.

### Requirements

- [pnpm](https://pnpm.io/) >=8.6.12
- [Node.js](https://nodejs.org/en/download/) 18.0.0

### Quick Start

If you don't have installed Yarn execute:

`npm install --global pnpm`

then to install project pacakges run in the project root:

`pnpm install`

#### Add a New component

1. Create a folder inside `src/components/*`
2. Create `*.stories.tsx` file and rest of the `ts / tsx` files
3. In the `\*.stories.tsx`` file add the following code:

```
import { YourComponent } from '@components/YourComponent'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'YourComponent',
  component: YourComponent
} as ComponentMeta<typeof YourComponent>

const Template: ComponentStory<typeof YourComponent> = args => <YourComponent {...args} />

export const NameOfVariant = Template.bind({})

NameOfVariant.args = {
  // your props
}
```

4. Export your component in `src/index.ts`

```
export * from '@components/YourComponent'
```

5. Run `pnpm storybook` and open `http://localhost:6006`. Check if your
   component works as expected.

6. Run `pnpm release-it`, stage all files

7. Push it

### Development

- `pnpm storybook` - development and watch
- `pnpm build` - build

#### CI

Every push triggers CI pipeline. For more information please check
`.github/workflows/ci.yml`
