# @antzy/eslint-config

<p align="center">
English | <a href="README-CN.md">中文</a>
</p>

Thanks to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config), because of it, creating code formats that suit our style has become much easier.

## Usage

> Tips: If you don't want to manually install, [here is a quick installation method](https://github.com/AntzyMo/ieslint-cli). Just enter one command to save the hassle of repetitive configuration operations.

### Manual Install
```bash
pnpm add eslint -D
pnpm add @antzy/eslint-config -D
```

### Config eslint.config.js
With `"type"`: `"module"` in package.json (recommended):
```js
import { antzy } from '@antfu/eslint-config'

export default antzy({
  rules:{
     /* your stylistic rules */
  }
})
```

With CJS:
```js
const { antzy } = require('@antfu/eslint-config')

module.exports = antzy({
  rules:{
     /* your stylistic rules */
  }
})

```

## License
[MIT](./LICENSE) License &copy; 2023-PRESENT [AntzyMo](https://github.com/AntzyMo)

