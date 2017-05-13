/* eslint-env mocha */
import A from 'assert';
import isEven from './isEven';

describe('number.isEven(subject)', () => {
  it('checks if "subject" is an even number', () => {
    for (let i = 0; i < 1000; i++)
      A.equal(isEven(i), i % 2 === 0);
  });

  it('returns false if "subject" is a float', () => {
    A.equal(isEven(1.1), false);
    A.equal(isEven(1.1), false);
    A.equal(isEven(1.2), false);
    A.equal(isEven(2.1), false);
    A.equal(isEven(2.2), false);
  });

  it('returns false if "subject" is not a number', () => {
    A.equal(isEven('foo'), false);
    A.equal(isEven({}), false);
    A.equal(isEven([]), false);
    A.equal(isEven(null), false);
    A.equal(isEven(new Number(2)), false);
  });
});
