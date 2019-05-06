@typescript-eslint issue

To reproduce:
1. npm/yarn install
2. Run `node ./lintFromApi.js`

First invocation of ESLint API returns errors correctly, second invocation throws error:

```stacktrace
TypeError: Cannot read property 'name' of undefined
    at Converter.convertNode (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:1402:28)
    at Converter.converter (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:66:27)
    at Converter.convertChild (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:138:21)
    at Converter.convertNode (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:1174:34)
    at Converter.converter (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:66:27)
    at Converter.convertChild (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:138:21)
    at nodes.map.statement (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:194:32)
    at Array.map (<anonymous>)
    at Converter.convertBodyExpressions (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:193:14)
    at Converter.convertNode (/Users/jetbrains/sources/testProjects/typescript-eslint-bug/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:427:32)

```
