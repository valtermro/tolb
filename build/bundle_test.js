/* eslint-env mocha */
const A = require('assert');
const path = require('path');
const fs = require('fs');

const pathFromRoot = x => path.join(__dirname, '..', x);

const readFiles = (dir) => {
  return fs.readdirSync(dir)
    .map((f) => {
      const file = path.join(dir, f);
      if (file.slice(-3) === '.js')
        return file;
      return readFiles(file);
    });
};

const allFiles = fs.readdirSync(pathFromRoot('src'))
  .map(pack => readFiles(pathFromRoot(pack)))
  .reduce((accum, list) => {
    return Array.prototype.concat.apply(accum, list);
  }, []);

const files = allFiles.filter(x => !x.match(/index\.js$/));
const indexes = allFiles.filter(x => x.match(/index\.js$/));

describe('node bundle', () => {
  it('exports one function per file', () => {
    files.forEach((file) => {
      const exported = require(file);
      A.equal(typeof exported, 'function');
    });
  });

  it('has valid index files', () => {
    indexes.forEach((index) => {
      const dir = path.dirname(index);
      const exported = require(index);

      Object.keys(exported).forEach((fn) => {
        const source = path.join(dir, `${fn}.js`);
        A.strictEqual(exported[fn], require(source));
      });
    });
  });
});
