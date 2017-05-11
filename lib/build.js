const path = require('path');
const fs = require('./fs');

const sourceFiles = [
  '.editorconfig',
  '.eslintrc.json',
  '.git',
  '.gitignore',
  '.gitlabels',
  '.npmignore',
  'LICENSE',
  'README.md',
  'benchmark',
  'bin',
  'config',
  'lib',
  'node_modules',
  'package.json',
  'src',
];

const cleanUp = () => {
  fs.ls(path.join(__dirname, '..'))
    .filter(p => !sourceFiles.includes(p))
    .forEach(fs.rmf);
};

const writeIndexes = ({ verbose, dir }) => {
  const dirs = dir !== 'all' ? [dir] :
    fs.ls(fs.SRC)
      .filter(f => !f.includes('_'))
      .map(f => path.join(fs.SRC, f));

  dirs.forEach((pack) => {
    const indexFile = path.join(pack, 'index.js');
    const contents = [];
    try {
      fs.findSources(pack)
        .filter(f => !f.match(/\/_|index\.js/))
        .map(f => path.basename(f))
        .forEach((file) => {
          const fn = file.replace('.js', '');
          contents.push(`export { default as ${fn} } from './${fn}';`);
        });
      // ensures a new line at the end of the file
      contents.push('');

      if (verbose) console.log(`- ${pack}`);
      fs.writeFile(indexFile, contents.join('\n'));
    } catch (error) {
      console.error(error.stack);
      process.exit(error.errno);
    }
  });
};

module.exports = {
  cleanUp,
  writeIndexes,
};
