/* eslint-env mocha */
import A from 'assert';
import lpad from './lpad';

describe('string.lpad(length, fill, str)', () => {
  it('pads "str" to left until "length"', () => {
    A.equal(lpad(3, '-', 'a'), '--a');
    A.equal(lpad(3, '-', 'ab'), '-ab');
    A.equal(lpad(3, '-', 'abc'), 'abc');
    A.equal(lpad(3, '-', 'abcd'), 'abcd');
  });

  it('allows partial application', () => {
    A.equal(lpad(3)('-')('a'), '--a');
    A.equal(lpad(3)('-', 'a'), '--a');
    A.equal(lpad(3, '-')('a'), '--a');
  });
});
