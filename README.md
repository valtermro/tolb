## About the library
-------------------
This library contains a set of javascript helper functions designed to allow a
more functional style of code.  
Each function takes the data upon which to operate as the last argument, and almost
all functions can be partially applied with any number of arguments and in any
number of operations.  
The function `reduce` of the `list` package, for example, takes 3 arguments and
can be used:
* Passing all 3 arguments:
  ```javascript
  const result = reduce(sum, 0, arrayOfNumbers);
  ```

* Omiting the last argument (the data):
  ```javascript
  const waitingData = reduce(sum, 0);
  const result = waitingData(arrayOfNumbers);
  ```
* Omiting the last two arguments
  ```javascript
  const waitingLastTwoArgs = reduce(sum);
  const result = waitingLastTwoArgs(0, arrayOfNumbers);
  // or
  const nowWaitingData = waitingLastTwoArgs(0);
  const result = nowWaitingData(arrayOfNumbers);
  ```

**Quick notes**:
* This library is meant to be light and simple. For more robust (and heavier)
alternatives, check out [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
and [ramda](http://ramdajs.com/). 
* I say that **almost** all functions can be partially applied because some functions
in the lib are used to create functions, and those created functions can't be
partially applied by default.

## Installation
-------------------
The only way to get this library is through npm.  
*Use a module bundler like [webpack](https://webpack.github.io/) to use it on the browser.*
```
npm install [--save] tolb
```

## Usage
-------------------
This library is distributed as a set of packages, so `require` the desired package,
rather than the module itself:
```javascript
const object = require('tolb/object');

object.values({ one: 1, two: 2 }); //=> [1, 2]
```

It's also possible to pull out only a specific function:
```javascript
const map = require('tolb/list/map');
const { toUpper } = require('tolb/string');

map(toUpper, ['foo', 'bar']); //=> ['FOO', 'BAR']
```

## Documentation
----------------
Each package is represented by a directory inside the `src` folder, and each function
in that package is in its own file. Inside each file you will find a
[JSDoc](http://usejsdoc.org/) comment explaining what the function does. Also,
alongside with the source files, you will find test files that may help you to
understand each function by showing you some usage examples.  
That's the only documentation I have. By now...

**A quick note**.  
Some packages are designed to work with a specific datatype. The functions in
the `math` package, for example, expect numbers, and the functions in the `string`
package expect, well, strings.  
If the wrong type of argument is passed, an error
may be thrown **by the javascript runtime**.or the function may fail silently.
Make sure to pass the right argument to each function.

## The "next" bundle.
---------------------
This module includes a `next` bundle. The only difference from `next` to the normal
bundle is that it uses [es6 module syntax](http://exploringjs.com/es6/ch_modules.html),
instead of commonJS.

If you're using a module bundler that takes advantage of the static nature of es6
modules ([rollup.js](http://rollupjs.org/)
[does it](https://blog.mariusschulz.com/2016/06/12/bundling-and-tree-shaking-with-rollup-and-ecmascript-2015-modules),
the v2 of webpack [does it too](http://www.2ality.com/2015/12/webpack-tree-shaking.html)),
you might want to use this one. 

Please, note some differences in the way packages are imported when using the
`next` bundle.  
*I'm assuming that, because you're using `next`, you're also using the es6 syntax to
do your imports.*  

This:
```javascript
const object = require('tolb/object');
const { map } = require('tolb/list');
const compose = require('tolb/combinator/compose');
```
becomes this:
```javascript
import * as object from 'tolb/next/object';
import { map } from 'tolb/next/list';
import compose from 'tolb/next/combinator/compose';
```

### Replace `tolb/next` with `tolb` in `import`s
If you're using webpack, you can add the following to your configuration file:
```javascript
    // ...
    resolve: {
      alias: {
        tolb: 'tolb/next',
      },
    },
    // ...
```
and then `import` from `tolb`
```javascript
// `keys` will be imported from `tolb/next/object` 
import { keys } from 'tolb/object';
```
