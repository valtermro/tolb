const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(__dirname, '..', 'src');

const ls = fs.readdirSync.bind(fs);
const exists = fs.existsSync.bind(fs);
const fileContents = f => fs.readFileSync(f, 'utf8');
const isFile = x => fs.statSync(x).isFile();
const isHidden = f => /[\\/]\./.test(f);
const isTest = f => isFile(f) && !isHidden(f) && f.slice(-8) === '_test.js';
const isSource = f => isFile(f) && !isHidden(f) && !isTest(f);

const rmf = (target) => {
  if (isFile(target))
    return fs.unlinkSync(target);

  const files = ls(target);

  if (files.length > 0)
    files.map(f => path.join(target, f)).forEach(rmf);

  fs.rmdirSync(target);
};

const mkdirp = (dir) => {
  if (exists(dir))
    return;

  const parent = path.dirname(dir);
  if (!exists(parent))
    mkdirp(parent);

  fs.mkdirSync(dir);
};

const findBy = pred => (dir) => {
  const finder = findBy(pred);

  return fs.readdirSync(dir)
    .map(f => path.join(dir, f))
    .map(f => isFile(f) ? f : finder(f))
    .reduce((a, f) => a.concat(f), [])
    .filter(pred);
};

const findSources = findBy(isSource);
const findTests = findBy(isTest);

const writeFile = (file, contents) => {
  mkdirp(path.dirname(file));
  fs.writeFileSync(file, contents);
};

module.exports = {
  ROOT,
  SRC,
  exists,
  fileContents,
  findSources,
  findTests,
  ls,
  rmf,
  writeFile,
};
