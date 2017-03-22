/* eslint-env mocha */
import A from 'assert';
import lpad from './lpad';
import config from '../../build/constants.config';

describe('lpad(length, fill, str)', () => {
  it('pads "str" to left until "length"', () => {
    A.equal(lpad(3, '-', 'a'), '--a');
    A.equal(lpad(3, '-', 'ab'), '-ab');
    A.equal(lpad(3, '-', 'abc'), 'abc');
    A.equal(lpad(3, '-', 'abcd'), 'abcd');
  });

  it('throws if "length" is not a number', () => {
    A.throws(() => lpad('', '', ''), config.EXPECTED_NUMBER_ERRMSG);
  });

  it('allows partial application', () => {
    A.equal(lpad(3)('-')('a'), '--a');
    A.equal(lpad(3)('-', 'a'), '--a');
    A.equal(lpad(3, '-')('a'), '--a');
  });
});
