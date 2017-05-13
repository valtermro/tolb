/* eslint-env mocha */
import A from 'assert';
import even from './even';

describe('is.even(subject)', () => {
  it('checks if "subject" is an even number', () => {
    for (let i = 0; i < 1000; i++)
      A.equal(even(i), i % 2 === 0);
  });

  it('returns false if "subject" is a float', () => {
    A.equal(even(1.1), false);
    A.equal(even(1.1), false);
    A.equal(even(1.2), false);
    A.equal(even(2.1), false);
    A.equal(even(2.2), false);
  });

  it('returns false if "subject" is not a number', () => {
    A.equal(even('foo'), false);
    A.equal(even({}), false);
    A.equal(even([]), false);
    A.equal(even(null), false);
    A.equal(even(new Number(2)), false);
  });
});
