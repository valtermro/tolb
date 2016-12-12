/* eslint-env mocha */
import A from 'assert';
import toUpper from './toUpper';

describe('toUpper(str)', () => {
  it('converts "str" to upper case', () => {
    const assert = str => A.equal(toUpper(str), str.toUpperCase());
    assert('Foo');
    assert('FoA');
    assert('FoA BAr');
  });
});
