/**
 * bin/new.js
 *
 * Creates template files for new functions.
 * The package in which the function will be placed must already exist.
 *
 * Accepts the following arguments, the function path being the only required one.
 *
 * - A function path in one of the following formats:
 *   - package.functionName
 *   - package/functionName
 * - A comma-separated list of arguments for the new function, prefixed with '-a':
 *   - -afoo
 *   - -afoo,bar
 * - A list of single-letter codes prefixed with "-". Accepted codes are:
 *   - s = Create the source file
 *   - t = Create the test file
 *
 * If the option list is ommited, -st is used.
 *
 * Examples:
 *   $ node bin/new.js function.foo
 *   => creates: src/function/foo.js AND src/function/foo_test.js
 *
 *   $ node bin/new.js -t function.foo
 *   => creates: src/function/foo_test.js
 *
 *   $ node bin/new -stb -abar,baz function.foo
 *   => creates all files for function.foo setting up `bar` and `baz` as arguments for `foo`
 *
 * As long as a valid function path is given, the order of the arguments doesn't matter.
 * So any of the following is fine:
 *   $ node bin/new.js function.foo
 *   $ node bin/new.js -stb function.foo
 *   $ node bin/new.js -abar,baz function.foo -stb
 * But The following is not:
 *   $ node bin/new.js -stb
 */

const path = require('path');
const fs = require('../lib/fs');
const build = require('../lib/build');

const relativeToRoot = (packName) => {
  return `../${packName.split('.').map(_ => '..').join('/')}`;
};

const templates = {
  source({ argList, fnName }) {
    return [
      `export default function ${fnName}(${argList}) {`,
      '  // content',
      '}',
      '',
    ].join('\n');
  },

  test({ argList, fnName, packName }) {
    const toRoot = relativeToRoot(packName);

    return [
      '/* eslint-env mocha */',
      "import A from 'assert';",
      `import ${fnName} from './${fnName}';`,
      `import util from '${toRoot}/lib/util';`,
      `import stub from '${toRoot}/lib/stub';`,
      '',
      `describe('${packName}.${fnName}(${argList})', () => {`,
      '  it(\'passes\', () => {',
      `    A.equal(${fnName}, ${fnName});`,
      '  });',
      '});',
      '',
    ].join('\n');
  },
};

const args = process.argv.slice(process.argv.indexOf(__filename) + 1);
const fail = (msg, code) => {
  console.error(`Error: ${msg}`);
  process.exit(code || 2);
};

if (args.length < 1 || args.length > 3)
  fail('Wrong number of arguments');

let fnPath = args.find(f => f[0] !== '-');
let codeList = args.find(f => /-[^a]/.test(f));
let argList = args.find(f => /-a/.test(f));

if (!fnPath)
  fail('a function path must be given');
if (!codeList)
  codeList = '-st';
if (!argList)
  argList = '-a';

fnPath = fnPath.replace(/\./g, '/');
codeList = codeList.slice(1);
argList = argList.slice(2);

if (/[^st]/.test(codeList))
  fail(`invalid option list: -${codeList}`);

const packName = path.dirname(fnPath);
const fnName = path.basename(fnPath);
const packSRC = path.join(fs.SRC, packName);
if (!fs.exists(packSRC))
  fail(`Package ${packName} doesn't exist`);

const toCreate = [];
if (codeList.includes('s'))
  toCreate.push('source');
if (codeList.includes('t'))
  toCreate.push('test');

toCreate.forEach((type) => {
  const filename =
    type === 'source' ? path.join(packSRC, `${fnName}.js`) :
    type === 'test' ? path.join(packSRC, `${fnName}_test.js`) : '';
  const contents = templates[type]({
    fnName: fnName,
    argList: argList.replace(/,/g, ', '),
    packName: packName.replace(/\//g, '.'),
  });

  if (fs.exists(filename))
    return console.log(`File '${filename}' already exists`);

  try {
    console.log(`Writing ${type} file for ${fnPath}`);
    fs.writeFile(filename, contents);

    if (type === 'source' && !filename.includes('/_'))
      build.writeIndexes({ verbose: false, dir: packSRC });
  } catch (error) {
    fail(error.stack, error.errno);
  }
});
