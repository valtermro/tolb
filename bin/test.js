const path = require('path');
const Mocha = require('mocha');
const fs = require('../lib/fs');

const args = process.argv.slice(process.argv.indexOf(__filename) + 1);
const packages = fs.ls(path.join(__dirname, '..', 'src'));
const requested = args[0] || 'all';

const pathFromSrc = p => path.join(__dirname, '..', 'src', p);
let testsToRun;


if (requested === 'build') {
  testsToRun = [path.join(__dirname, '_internal', 'test-build.js')];
} else if (requested === 'all') {
  testsToRun = packages
    .map(pathFromSrc)
    .map(fs.findTests)
    .reduce((a, f) => a.concat(f), []);
} else if (/.+[./].+/.test(requested)) {
  // path to a specific method (e.g. list.map)
  const parsed = pathFromSrc(`${requested.replace(/\./g, path.sep)}_test.js`);
  if (fs.exists(parsed))
    testsToRun = [parsed];
} else {
  // maybe a module name
  testsToRun = fs.findTests(pathFromSrc(requested));
}

if (!testsToRun || testsToRun.length === 0) {
  console.error(`Error: "${requested}" didn't match any tests`);
  process.exit(2);
}

const mocha = new Mocha({ bail: true });

require('../lib/babel-register');
testsToRun.forEach(mocha.addFile.bind(mocha));

mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);
  });
});
