# document-reader-typings

TypeScript definitions for Regula Document Reader SDK

## Installation

```sh
npm install --save @regulaforensics/document-reader-typings
```

## Setup tests

1. Copy `.env.example` to `.env` and set all variables (or set environment variables manually, if some variables are not set, tests for this functionality will be skipped)
2. Run `node tools/inspect-test-dirs-configuration.js` to check if all test directories are configured correctly
3. Run `npm run test`

## Manual check of separate file

1. Build project with `npm run build`
2. Run `node tools/analize-json.js --f <path-to-file>`

Output when file is invalid:
```
Errors: {
  "ContainerList.List.0.light": [
    "light must be a number",
    "light must be one of the following values: 0, 6, 24, 128"
  ]
}
```

Output when file is valid:
```
File is valid
```

### Difference check
Option `-d` allows to run check a difference between validated file and original file:
If there will be any difference, it will be printed to console. For example:
```
Differences: [
  {
    "kind": "change occurred within an array",
    "path": "ContainerList.List.1"
  },
  {
    "kind": "property/element was deleted",
    "path": "TransactionInfo.Version"
  },
  {
    "kind": "newly added property/element",
    "path": "log"
  }
]
```

You can also change the file `.excluded` to exclude some properties from difference check. File is located in root of project.
This file exclude path for `analyze-json` tool and for tests.
