/* eslint-env mocha */
import A from 'assert';
import number from './number';

describe('is.number(subject)', () => {
  it('checks if "subject" is a number', () => {
    A.equal(number(0), true);
    A.equal(number(1), true);
    A.equal(number(-1), true);
    A.equal(number(Math.PI), true);
    A.equal(number(NaN), false);
    A.equal(number(Infinity), false);
    A.equal(number('foo'), false);
    A.equal(number(new Number()), false);
    A.equal(number([]), false);
    A.equal(number(undefined), false);
    A.equal(number(null), false);
  });
});
