/* eslint-env mocha */
import A from 'assert';
import isOdd from './isOdd';

describe('number.isOdd(subject)', () => {
  it('checks if "subject" is an odd number', () => {
    for (let i = 0; i < 1000; i++)
      A.equal(isOdd(i), i % 2 !== 0);
  });

  it('returns false if "subject" is a float', () => {
    A.equal(isOdd(1.1), false);
    A.equal(isOdd(1.1), false);
    A.equal(isOdd(1.2), false);
    A.equal(isOdd(2.1), false);
    A.equal(isOdd(2.2), false);
  });

  it('returns false if "subject" is not a number', () => {
    A.equal(isOdd('foo'), false);
    A.equal(isOdd({}), false);
    A.equal(isOdd([]), false);
    A.equal(isOdd(null), false);
    A.equal(isOdd(new Number(1)), false);
  });
});
