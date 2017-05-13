/* eslint-env mocha */
import A from 'assert';
import float from './float';

describe('is.float(subject)', () => {
  it('checks if "subject" is a floating point number', () => {
    A.equal(float(1.8), true);
    A.equal(float(-1.8), true);
    A.equal(float(Math.PI), true);
    A.equal(float(1), false);
    A.equal(float(1.0), false);
    A.equal(float(-1.0), false);
    A.equal(float(new Number(1)), false);
    A.equal(float(NaN), false);
    A.equal(float(Infinity), false);
    A.equal(float(-Infinity), false);
    A.equal(float('foo'), false);
    A.equal(float([]), false);
    A.equal(float({}), false);
    A.equal(float(null), false);
    A.equal(float(undefined), false);
  });
});
