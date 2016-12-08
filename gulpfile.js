/* eslint-env node */
/* eslint-disable no-console, no-shadow,no-param-reassign */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const rmdir = require('rmdir');
const gulp = require('gulp');
const Server = require('karma').Server;
const $ = require('gulp-load-plugins')();
const babelConfig = require('./_dev/babel.config');

// It's import to use relative paths
const TEST_FILES = ['./src/**/*_test.js'];
const SRC_FILES = ['./src/**/*.js', '!./src/**/*_test.js'];
const TEMPLATE = {
  src:
'export default function {{name}}({{args}}) {\n}\n',

  test:
`/* eslint-env mocha */
import A from 'assert';
import {{name}} from './{{name}}';
import util from '../../_dev/util';

describe('{{pack}}.{{name}}({{args}})', () => {
  it('passes', () => {
    A.equal({{name}}, {{name}});
  });
});\n`,

  bench:
`require('../../_dev/babel.register');
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite('{{pack}}.{{name}}()');
const util = require('../../_dev/util');

const {{name}} = require('../../src/{{pack}}/{{name}}').default;

suite
  .add('{{pack}}.{{name}}', () => {
  });

module.exports = suite;\n`,
};

//------------------------------------------------------------------------------
// HELPERS
//------------------------------------------------------------------------------
const readFiles = (fullPath, includeTests) => (dir) => {
  let result = fs.readdirSync(dir)
    .filter(f => f !== 'index.js' && f[0] !== '_');

  if (!includeTests)
    result = result.filter(f => f.slice(-8) !== '_test.js');

  if (fullPath)
    result = result.map(f => path.join(dir, f));

  return result;
};

const PACKAGES = readFiles(false, false)('./src');
const packExists = (name) => {
  return PACKAGES.indexOf(name) >= 0;
};

const fileExists = (dir, file) => {
  const files = readFiles(false, true)(dir);
  return files.indexOf(file) >= 0;
};

const message = (color, bg) => (msg) => {
  if (bg == null) {
    console.error(chalk.red(msg));
  } else {
    const bgColor = `bg${bg[0].toUpperCase()}${bg.slice(1)}`;
    console.error(chalk[color](chalk[bgColor](msg)));
  }
};

const error = message('white', 'red');
const failure = done => (msg) => {
  error(msg);
  done();
};

const pathFromRoot = (relative) => {
  return path.join(__dirname, relative);
};
const pathFromSrc = (relative) => {
  return path.join(__dirname, 'src', relative);
};

const fileInfo = (name, suffix) => {
  if (typeof name !== 'string' || name.indexOf('.') < 0)
    return error(`"${name}" is not a valid name`);

  const [pack, fn] = name.split('.');
  const fname = suffix !== '_bench' ? `${fn}${suffix}.js` : `${fn}.js`;
  const dir = suffix !== '_bench' ? pathFromSrc(pack) :
    path.join(pathFromRoot('benchmark'), pack);

  return [pack, fn, dir, fname];
};

const writeIndex = dir => function writeIndex(done) {
  const write = (folder) => {
    if (path.basename(folder)[0] === '_')
      return;

    const files = readFiles(false, false)(folder);
    const contents = files.reduce((a, f) => {
      const n = f.slice(0, -3);

      if (f !== 'index.js' && f[0] !== '_')
        a += `export { default as ${n} } from './${n}';\n`;

      return a;
    }, '');

    fs.writeFileSync(path.join(folder, 'index.js'), contents);
  };

  if (dir !== 'all') {
    write(dir);
  } else {
    fs.readdirSync('./src')
      .map(pathFromSrc)
      .forEach(write);
  }

  if (done) done();
};

//------------------------------------------------------------------------------
// TASKS
//------------------------------------------------------------------------------
const bundle = name => function bundle() {
  return gulp.src(SRC_FILES)
    .pipe($.babel(babelConfig[name]))
    .pipe(gulp.dest(name === 'next' ? './next' : '.'));
};

const eslint = (file, fail) => function eslint() {
  const src = file === 'all' ? './**/*.js' : file;
  let stream = gulp.src(src)
    .pipe($.eslint())
    .pipe($.eslint.format());

  if (fail)
    stream = stream.pipe($.eslint.failAfterError());

  return stream;
};

const mocha = (file, fail) => function mocha() {
  const src = file === 'all' ? TEST_FILES : file;
  const stream = gulp.src(src)
    .pipe($.mocha({
      reporter: 'progress',
      bail: true,
      require: ['./_dev/babel.register.js'],
    }));

  if (fail === false) {
    stream.on('error', (err) => {
      return $.util.log(err.message);
    });
  }

  return stream;
};

const karma = () => function karma(done) {
  const single = $.util.env.s !== undefined;
  const server = new Server({
    configFile: path.join(__dirname, '_dev/karma.config.js'),
    singleRun: single,
  }, done);

  server.start();
};

const benchmark = () => function benchmark() {
  let file = ['./benchmark/**/*.js', '!./benchmark/_**/*.js'];

  const name = $.util.env.f;
  if (name) {
    const [,, dir, fname] = fileInfo(name, '_bench');
    file = path.join(dir, fname.replace('.js', '*.js'));
  }

  return gulp.src(file, { read: false })
    .pipe($.benchmark());
};

const clear = () => function clear(done) {
  fs.readdirSync('./')
    .filter(p => !p.match(/^\..+|.+\.js[on]?|_dev|src|benchmark|node_modules|README|LICENSE/))
    .map(pathFromRoot)
    .forEach(p => rmdir(p));
  done();
};

const watchBuild = () => function watching(done) {
  const old = fs.readdirSync('./src')
    .map(pathFromSrc)
    .map(readFiles(true, true))
    .reduce((a, f) => a.concat(f), []);

  return gulp.watch(SRC_FILES)
    .on('change', (name) => {
      console.log(name);
      const file = pathFromRoot(name);
      const dir = path.dirname(file);
      const basename = path.basename(file);

      if (basename === 'index.js')
        return;

      // run the tests for this file
      const testFile = basename.slice(-8) === '_test.js' ? file :
        file.replace(basename.slice(-3), '_test.js');

      console.log('Running tests in', testFile);
      mocha(testFile, false)();

      // lint this file
      eslint(file, false)();

      // New file. Add it to the index of the package.
      if (old.indexOf(file) < 0) {
        writeIndex(dir)(done);
        old.push(file);
      }
    })
    .on('unlink', (name) => {
      const file = pathFromRoot(name);
      const dir = path.dirname(file);
      const oldi = old.indexOf(file);

      if (path.basename(file) === 'index.js')
        return;

      if (oldi >= 0) {
        writeIndex(dir)(done);
        old.splice(oldi, 1);
      }
    });
};

const create = () => function create(done) {
  const file = $.util.env.f;
  const test = $.util.env.t !== undefined ? $.util.env.t : file ? 'true' : 'false';
  const bench = $.util.env.b !== undefined ? $.util.env.b : 'false';
  const args = $.util.env.a !== undefined ? $.util.env.a.replace(/,/g, ', ') : undefined;
  const fail = failure(done);

  if ((file !== undefined || test !== 'false') && args === undefined)
    return fail('no argument list defined');

  if (!file && test === true && !bench)
    return fail('nothing to do');

  const write = (what, file, name, pack, args) => {
    const contents = TEMPLATE[what]
      .replace(/{{name}}/g, name)
      .replace(/{{pack}}/g, pack)
      .replace(/{{args}}/g, args);

    fs.writeFileSync(file, contents);
  };

  if (file) {
    const [pack, fn, dir, fname] = fileInfo(file, '');

    if (!packExists(pack))
      return fail(`package "${pack}" not found`);
    if (fileExists(dir, fname))
      return fail(`file "${fname}" already exists`);

    write('src', path.join(dir, fname), fn, pack, args);
    writeIndex(dir)();
  }

  if (test !== 'false') {
    const name = file || test;
    const [pack, fn, dir, fname] = fileInfo(name, '_test');

    if (!packExists(pack))
      return fail(`package "${pack}" not found`);
    if (!fileExists(dir, `${fn}.js`))
      return fail(`source file of "${name}" not found`);
    if (fileExists(dir, fname))
      return fail(`file ${fname} already exists`);

    write('test', path.join(dir, fname), fn, pack, args);
  }

  if (bench !== 'false') {
    const name = file || bench;
    const [pack, fn, dir, fname] = fileInfo(name, '_bench');

    if (!packExists(pack))
      return fail(`package "${pack}" not found`);

    if (!fileExists(path.dirname(dir), pack))
      fs.mkdirSync(dir);

    if (fileExists(dir, fname))
      return fail(`file "${fname}" already exists`);

    write('bench', path.join(dir, fname), fn, pack, args);
  }

  done();
};

gulp.task('new', create());
gulp.task('mocha', mocha('all', false));
gulp.task('karma', karma());
gulp.task('eslint', eslint('all', false));
gulp.task('test', gulp.parallel(eslint('all', true), mocha('all', true)));
gulp.task('bundle-node', bundle('node', false));
gulp.task('bundle-next', bundle('next', false));
gulp.task('bundle', gulp.parallel('bundle-node', 'bundle-next'));
gulp.task('build', gulp.series(writeIndex('all'), 'test', 'bundle'));
gulp.task('benchmark', benchmark());
gulp.task('clear', clear());
gulp.task('dev', gulp.series(
  gulp.parallel(writeIndex('all'), 'eslint', 'mocha'),
  watchBuild()
));
