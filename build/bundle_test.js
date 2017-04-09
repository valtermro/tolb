/* eslint-env mocha */
const A = require('assert');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const pathFromRoot = x => path.join(ROOT, x);

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

// If the bundle for node is fine, the`next` bundle should also be ok.
describe('node bundle', () => {
  it('exports one function per file', () => {
    files.forEach((file) => {
      const exported = require(file);
      A.equal(typeof exported, 'function');
    });
  });

  it('index files export all methods', () => {
    indexes.forEach((index) => {
      const dir = path.dirname(index);
      const indexContents = fs.readFileSync(index, 'utf8');

      files.filter(f => f.indexOf(dir) === 0 && f.indexOf('_internal') < 0)
        .map(f => path.basename(f).replace('.js', ''))
        .forEach((method) => {
          if (!indexContents.match(`exports.${method} = `))
            A.fail('', '', `${index.replace(`${ROOT}/`, '')} should export ${method}`);
        });
    });
  });

  it('index files have valid exports', () => {
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
