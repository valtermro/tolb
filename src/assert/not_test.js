/* eslint-env mocha */
import A from 'assert';
import not from './not';
import util from '../../_dev/util';

describe('assert.not(fn)', () => {
  const isOdd = not(util.isEven);
  const isNotEqual = not(util.isEqual);

  it('negates the result of "fn"', () => {
    A.equal(isOdd(1), true);
    A.equal(isOdd(2), false);
    A.equal(isNotEqual(1, 2), true);
    A.equal(isNotEqual(1, 1), false);

    A.equal(util.isEven(2), true);
    A.equal(util.isEven(1), false);
    A.equal(util.isEqual(1, 1), true);
    A.equal(util.isEqual(1, 2), false);
  });

  it('the complement has the same arity of "fn"', () => {
    A.equal(isOdd.length, 1);
    A.equal(isNotEqual.length, 2);
  });
});
