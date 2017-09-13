/* eslint-env mocha */
const A = require('assert');
const path = require('path');
const fs = require('../../lib/fs');

const shouldBeExported = f => !f.match(/_|index\.js/);
const removeExtension = f => f.replace('.js', '');

describe('node build', () => {
  const packages = fs.ls(fs.SRC).map(f => path.join(fs.ROOT, f));
  const indexed = packages.filter(f => !f.includes('/_'));

  it('exports one function per file', () => {
    packages
      .map(fs.findSources)
      .reduce((a, f) => a.concat(f), [])
      .filter(f => !f.includes('index.js'))
      .forEach((file) => {
        const type = typeof require(file);
        if (type !== 'function')
          A.fail(type, 'function', `${file} should export a function`);
      });
  });

  it('all packages have index files', () => {
    indexed.forEach((dir) => {
      if (!fs.ls(dir).includes('index.js'))
        A.fail(null, null, `${dir} should contain an index.js file`);
    });
  });

  it('index file export all, and only, functions in the package', () => {
    indexed.forEach((dir) => {
      const ifile = path.join(dir, 'index.js');
      const icontents = fs.fileContents(ifile);
      const fnNames = fs.ls(dir)
        .filter(shouldBeExported)
        .map(removeExtension);

      // an index file should have 'export' statements for all functions in the package
      fnNames.forEach((fnName) => {
        if (!icontents.includes(`exports.${fnName} =`))
          A.fail(null, null, `${ifile} should export ${fnName}`);
      });


      // an index file should not export a function that does not exist in the package
      icontents.match(/exports\..+ =/g)
        .map(m => m.replace(/exports\.(.+) =/g, '$1'))
        .forEach((exported) => {
          if (!fnNames.includes(exported))
            A.fail(null, null, `${ifile} exports an invalid function: ${exported}`);
        });
    });
  });

  it('index file export the right functions', () => {
    indexed.forEach((dir) => {
      const ifile = path.join(dir, 'index.js');
      const index = require(ifile);

      fs.findSources(dir)
        .filter(shouldBeExported)
        .forEach((file) => {
          const exported = require(file);
          const fnName = removeExtension(path.basename(file));
          if (index[fnName] !== exported)
            A.fail(null, null, `${ifile} exports the wrong function on key: ${fnName}`);
        });
    });
  });
});
