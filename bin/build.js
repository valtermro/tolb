const path = require('path');
const { transformFileSync } = require('babel-core');
const fs = require('../lib/fs');
const babelConfig = require('../config/babel');
const build = require('../lib/build');

const args = process.argv.slice(process.argv.indexOf(__filename) + 1);
const targets = ['node', 'next'];
const requested = args.length === 0 ? targets : args;

requested.forEach((target) => {
  if (!targets.includes(target)) {
    console.error(`Error: invalid target: ${target}`);
    process.exit(2);
  }
});


console.log('Writing index files');
build.writeIndexes({ verbose: true, dir: 'all' });

const packages = fs.ls(fs.SRC).reduce((accum, pack) => {
  return Object.assign(accum, { [pack]: fs.findSources(path.join(fs.SRC, pack)) });
}, {});

console.log(`Building: ${requested.join(' and ')}`);
Object.keys(packages).forEach((pack) => {
  console.log(`- ${pack}`);

  requested.forEach((target) => {
    const destBase = target === 'node' ? '' : 'next/';

    packages[pack].forEach((file) => {
      try {
        const { code } = transformFileSync(file, babelConfig[target]);
        const dest = file.replace('src/', destBase);

        fs.writeFile(dest, code);
      } catch (error) {
        console.error(error.stack);
        console.error('Cleaning up');
        build.cleanUp();
        process.exit(error.errno);
      }
    });
  });
});
