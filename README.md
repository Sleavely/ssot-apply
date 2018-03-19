# ssot-apply

Applies the single source of truth ([ssot](https://github.com/switters/ssot)) to your `process.env`.

## Installation

```bash
npm install --save ssot-apply
```

## Usage

```javascript
require('ssot-apply').config();
// Your process.env has been updated with SSOT settings from CLI, .env, and /config/*.json

require('ssot-apply').parsed;
// Returns the parsed SSOT without modifying your process.env
```
