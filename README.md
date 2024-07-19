<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/DouglasNeuroInformatics/eslint-config">
    <img src="https://raw.githubusercontent.com/DouglasNeuroInformatics/.github/main/assets/img/dnp-utility-logo.png" alt="Logo" width="100" >
  </a>
  <h3 align="center">@douglasneuroinformatics/eslint-config</h3>
  <p align="center">
    Shared linting configurations for DNP projects written in TypeScript/JavaScript 
  </p>
</div>

<!-- PROJECT SHIELDS -->
<div align="center">

![license](https://img.shields.io/github/license/DouglasNeuroInformatics/eslint-config)
![version](https://img.shields.io/github/package-json/v/DouglasNeuroInformatics/eslint-config)

</div>
<hr />

## Installation

```shell
pnpm add -D @douglasneuroinformatics/eslint-config eslint
```

## Usage

**eslint.config.js**

```javascript
import { config } from '@douglasneuroinformatics/eslint-config';

export default config();
```

## VSCode Setup (Recommended)

**settings.json**

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro",
    "typescript",
    "typescriptreact",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc"
  ]
}
```
