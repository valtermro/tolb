/* eslint-env mocha */
import A from 'assert';
import odd from './odd';

describe('is.odd(subject)', () => {
  it('checks if "subject" is an odd number', () => {
    for (let i = 0; i < 1000; i++)
      A.equal(odd(i), i % 2 !== 0);
  });

  it('returns false if "subject" is a float', () => {
    A.equal(odd(1.1), false);
    A.equal(odd(1.1), false);
    A.equal(odd(1.2), false);
    A.equal(odd(2.1), false);
    A.equal(odd(2.2), false);
  });

  it('returns false if "subject" is not a number', () => {
    A.equal(odd('foo'), false);
    A.equal(odd({}), false);
    A.equal(odd([]), false);
    A.equal(odd(null), false);
    A.equal(odd(new Number(1)), false);
  });
});
