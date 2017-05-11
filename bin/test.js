const path = require('path');
const Mocha = require('mocha');
const fs = require('../lib/fs');

const args = process.argv.slice(process.argv.indexOf(__filename) + 1);
const packages = fs.ls(path.join(__dirname, '../src'));
const requested = args[0] || 'all';

const pathFromSrc = p => path.join(__dirname, '../src', p);
const testNotFound = () => {
  console.error(`Error: "${requested}" didn't match any tests`);
  process.exit(2);
};


let testsToRun = [];

if (requested.match(/.+[./].+/)) {
  const parsed = pathFromSrc(`${requested.replace(/\./g, '/')}_test.js`);
  if (!fs.exists(parsed))
    testNotFound();

  testsToRun = [parsed];
} else if (requested === 'all') {
  testsToRun = packages
    .map(pathFromSrc)
    .map(fs.findTests)
    .reduce((a, f) => a.concat(f), []);
} else if (requested === 'build') {
  testsToRun = [path.join(__dirname, '_internal/test-build.js')];
} else if (packages.includes(requested)) {
  testsToRun = fs.findTests(pathFromSrc(requested));
} else {
  testNotFound();
}


const mocha = new Mocha({ bail: true });

require('../lib/babel-register');
testsToRun.forEach(mocha.addFile.bind(mocha));

mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);
  });
});
