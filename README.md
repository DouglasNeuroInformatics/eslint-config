<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/DouglasNeuroInformatics/ESLintConfig">
    <img src=".github/assets/eslint-config-logo.png" alt="Logo" width="100" >
  </a>
  <h3 align="center">DNP ESLint Config</h3>
  <p align="center">
    Shared linting configurations for DNP projects written in TypeScript/JavaScript 
  </p>
</div>

<!-- PROJECT SHIELDS -->
<div align="center">

![license](https://img.shields.io/github/license/DouglasNeuroInformatics/ESLintConfig)
![version](https://img.shields.io/github/package-json/v/DouglasNeuroInformatics/ESLintConfig)

</div>
<hr />

## Installation

```shell
pnpm add -D @douglasneuroinformatics/eslint-config eslint
```

## Usage

**eslint.config.js**

```javascript
import { config } from "@douglasneuroinformatics/eslint-config";

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
