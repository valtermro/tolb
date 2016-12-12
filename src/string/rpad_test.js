/* eslint-env mocha */
import A from 'assert';
import rpad from './rpad';

describe('rpad(length, fill, str)', () => {
  it('pads "str" to right until "length"', () => {
    A.equal(rpad(3, '-', 'a'), 'a--');
    A.equal(rpad(3, '-', 'ab'), 'ab-');
    A.equal(rpad(3, '-', 'abc'), 'abc');
    A.equal(rpad(3, '-', 'abcd'), 'abcd');
  });

  it('allows partial application', () => {
    A.equal(rpad(3)('-')('a'), 'a--');
    A.equal(rpad(3)('-', 'a'), 'a--');
    A.equal(rpad(3, '-')('a'), 'a--');
  });
});
