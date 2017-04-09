/* eslint-env node */
/* eslint-disable no-console, no-shadow, no-param-reassign */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const rmdir = require('rmdir');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const babelConfig = require('./build/babel.config');

// use only relative paths
const TEST_FILES = ['./src/**/*_test.js'];
const SRC_FILES = ['./src/**/*.js', '!./src/**/*_test.js'];

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------
const newFileTemplate = {
  src(name, pack, args) {
    return `export default function ${name}(${args.replace(/,/g, ', ')}) {\n}\n`;
  },

  test(name, pack, args) {
    return [
      '/* eslint-env mocha */',
      'import A from \'assert\';',
      `import ${name} from './${name}';`,
      'import util from \'../../build/util\';',
      '',
      `describe('${name}(${args.replace(/,/g, ', ')})', () => {`,
      '  it(\'passes\', () => {',
      `    A.equal(${name}, ${name});`,
      '  });',
      '});',
      '',
    ].join('\n');
  },

  bench(name, pack) {
    return [
      'require(\'../../build/babel.register\');',
      'const Benchmark = require(\'Benchmark\');',
      `const suite = new Benchmark.Suite('${pack}.${name}()');`,
      'const util = require(\'../../build/util\');',
      '',
      `const ${name} = require('../../src/${pack}/${name}');`,
      '',
      'suite',
      `  .add('${pack}.${name}', () => {`,
      '  });',
      '',
      'module.exports = suite;',
      '',
    ].join('\n');
  },
};

const readFiles = (fullPath, includeTests, includeDangled) => (dir) => {
  let result = fs.readdirSync(dir)
    .filter(f => f !== 'index.js' && f[0] !== '.');

  if (!includeDangled)
    result = result.filter(f => f[0] !== '_');

  if (!includeTests)
    result = result.filter(f => f.slice(-8) !== '_test.js');

  if (fullPath)
    result = result.map(f => path.join(dir, f));

  return result;
};

const packageList = readFiles(false, false, true)('./src');

const packExists = (name) => {
  return packageList.indexOf(name) >= 0;
};

const fileExists = (dir, file) => {
  const files = readFiles(false, true)(dir);
  return files.indexOf(file) >= 0;
};

const log = {
  error(msg) {
    console.log(chalk.bold('\nError:'), chalk.yellow(msg), '\n');
  },
};

const pathFromRoot = (relative) => {
  return path.join(__dirname, relative);
};

const pathFromSrc = (relative) => {
  return path.join(__dirname, 'src', relative);
};

const fileInfo = (name, suffix) => {
  if (typeof name !== 'string' || name.indexOf('.') < 0)
    return log.error(`"${name}" is not a valid name`);

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

// -----------------------------------------------------------------------------
// TASKS
// -----------------------------------------------------------------------------
const bundle = name => function bundle() {
  return gulp.src(SRC_FILES)
    .pipe($.babel(babelConfig[name]))
    .pipe(gulp.dest(name === 'next' ? './next' : '.'));
};

const eslint = (file, fail) => function eslint() {
  const src = file !== 'all' ? file : [
    './src/**/*.js',
    './build/**/*.js',
    './benchmark/**/*.js',
  ];

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
      require: ['./build/babel.register.js'],
    }));

  if (fail === false) {
    stream.on('error', (err) => {
      return $.util.log(err.message);
    });
  }

  return stream;
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

const clean = () => function clean(done) {
  fs.readdirSync('./')
    .filter(p => !p.match(/^\..+|.+\.js[on]?|build|src|benchmark|node_modules|README|LICENSE/))
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
      const file = pathFromRoot(name);
      const dir = path.dirname(file);
      const basename = path.basename(file);

      if (basename === 'index.js')
        return;

      // run the tests for this file
      const testFile = basename.slice(-8) === '_test.js' ? file :
        file.replace(basename.slice(-3), '_test.js');

      if (fs.existsSync(testFile)) {
        console.log('Running tests in', testFile);
        mocha(testFile, false)();
      }

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
  const env = $.util.env;
  const file = env.f;
  const test = env.t !== undefined ? env.t : file ? 'true' : 'false';
  const bench = env.b !== undefined ? env.b : 'false';
  const args = env.a !== undefined && typeof env.a !== 'boolean' ? env.a : '';
  const fail = (msg) => {
    log.error(msg);
    done();
  };
  const write = (what, file, name, pack, args) => {
    const contents = newFileTemplate[what](name, pack, args);
    fs.writeFileSync(file,
      contents);
  };

  if ((file !== undefined || test !== 'false') && args === undefined)
    return fail('no argument list defined');

  if (!file && test === true && !bench)
    return fail('nothing to do');

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
gulp.task('clean', clean());

gulp.task('benchmark', benchmark());
gulp.task('test', gulp.parallel(eslint('all', true), mocha('all', true)));
gulp.task('test-bundle', mocha('./build/bundle_test.js', true));

gulp.task('bundle', gulp.series(
  writeIndex('all'),
  gulp.parallel(bundle('node'), bundle('next'))
));
gulp.task('build', gulp.series('clean', 'test', 'bundle', 'test-bundle'));

gulp.task('dev', gulp.series(
  gulp.parallel(writeIndex('all'), eslint('all', false), mocha('all', false)),
  watchBuild()
));
