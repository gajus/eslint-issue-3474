To reproduce the issues:

```sh
git clone https://github.com/gajus/eslint-issue-3474.git
cd eslint-issue-3474
npm install
node ./node_modules/.bin/eslint index.js
```

which ought to produce:

```
curiosity:eslint-issue-3474 gajus$ node ./node_modules/.bin/eslint index.js
/eslint-issue-3474/node_modules/eslint/lib/rules/sort-vars.js:21
                    var lastVariableName = memo.id.name,
                                               ^
TypeError: Cannot read property 'id' of undefined
    at /eslint-issue-3474/node_modules/eslint/lib/rules/sort-vars.js:21:48
    at Array.reduce (native)
    at EventEmitter.VariableDeclaration (/eslint-issue-3474/node_modules/eslint/lib/rules/sort-vars.js:19:31)
    at emitOne (events.js:77:13)
    at EventEmitter.emit (events.js:169:7)
    at Controller.controller.traverse.enter (/eslint-issue-3474/node_modules/eslint/lib/eslint.js:824:25)
    at Controller.__execute (/eslint-issue-3474/node_modules/eslint/node_modules/estraverse/estraverse.js:397:31)
    at Controller.traverse (/eslint-issue-3474/node_modules/eslint/node_modules/estraverse/estraverse.js:495:28)
    at EventEmitter.module.exports.api.verify (/eslint-issue-3474/node_modules/eslint/lib/eslint.js:817:24)
    at processText (/eslint-issue-3474/node_modules/eslint/lib/cli-engine.js:199:27)
```
