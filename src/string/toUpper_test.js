/* eslint-env mocha */
import A from 'assert';
import toUpper from './toUpper';

describe('string.toUpper(str)', () => {
  it('converts "str" to upper case', () => {
    A.equal(toUpper('Foo'), 'FOO');
    A.equal(toUpper('FoO'), 'FOO');
    A.equal(toUpper('Foo BAr'), 'FOO BAR');
  });
});
