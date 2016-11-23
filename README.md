**A set of helpers I've been writing while learning stuff**
-----------------------------------------------------------

## About the library
-------------------
Oh! My lib. It'll never be as robust as [lodash](https://lodash.com/), nor will it
have as many lovers as [ramda](http://ramdajs.com/). 
But it's mine, and I love it!! :D.

This poor thing is so naive. Its functions cannot check if their arguments are
of the right type, all they can do is throw the errors caused by invalid data
back to the innocent soul that (can we blame him/her??) didn't know that him/her
should've checked the validity of the data him/herself. These functions - oh! how
I feel for them - can't even distinguish an array from something that looks like
an array. -- Why, pah?!. Why did you make me like this?!  

But, the saddest thing about this little one is that it doesn't seem to have
ever heard about Object Oriented Programming. You can see the word "object" all
over the place, but it never deals with them as it should do. Here, objects are
always treated as simple key-value pairs, object literals they say (may that be
the reason for such confusion?).  

But love is a strange thing, isn't it? Even with all the problems, I was still
able to find a use for this malformed piece of s***. Actually it was quite simple.  
First I noticied that all functions here take the
data upon which they operate as their last argument and I thought:
"That makes these functions perfect to be partiallly applied in order to be used
in function compositions". So, I went out to find a way to partiallly apply these
ugly beasts and  guess what? I didn't need it. Almost all functions in this library
can be partially applied by default. Just like this. Out of the box.  
In fact, the more deep I go into this little disturbingly simple library, the
more I see its shy shine. I guess that's what the call "the power of love".


If you, like me, want to give this little child a chance to show its value,
despite all its simplicity and ignorance, here is what you can do:

**First, install it**:
```
npm install [--save] tolb
```

**Now import it**:  
*This library is distributed as a set of packages. So, to use it, you'll need to
`require` the desired package, rather than the module itself:*
```javascript
const object = require('tolb/object')

object.keys({ one: 1, two: 2 }) //=> ['one', 'two']
```

It's also possible to pull out only a specific function:
```javascript
const map = require('tolb/list/map')
const { toUpper } = require('tolb/string')

map(toUpper, ['foo', 'bar']) //=> ['FOO', 'BAR']
```

## Ok. But what about documentation?
----------------
This module is distributed as packages. Each package is represented by a directory
inside the `src` folder, and each function in that package is in its own file.
Inside each file you will find some [JSDoc](http://usejsdoc.org/) comment
explaining what the function does. Also, alongside with the source files you will
find test files that may help you to understand each function by showing you some
usage examples. And...  
Sorry. That is all the documentation I can offer. For now.

## The "next" bundle.
---------------------
This module includes a `next` bundle. The only difference from `next` to the normal
bundle is that it uses [es6 module syntax](http://exploringjs.com/es6/ch_modules.html),
instead of commonJS.

If you're using a module bundler that takes advantage of the static nature of es6 modules ([rollup.js](http://rollupjs.org/) [does it](https://blog.mariusschulz.com/2016/06/12/bundling-and-tree-shaking-with-rollup-and-ecmascript-2015-modules), the v2 of webpack [does it too](http://www.2ality.com/2015/12/webpack-tree-shaking.html)), you might want to use this one. 

Please, note some differences in the way you import a package when using the `next` bundle.  
*I'm assuming that, if you're using `next`, you're also using the es6 syntax to do your imports.*  

This:
```javascript
const object = require('tolb/object')
const { map } = require('tolb/list')
const equals = require('tolb/assert/equals')
```
becomes this:
```javascript
import * as object from 'tolb/next/object'
import { map } from 'tolb/next/list'
import equals from 'tolb/assert/equals'
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
import { keys } from 'tolb/object'
```
