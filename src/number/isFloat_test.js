/* eslint-env mocha */
import A from 'assert';
import isFloat from './isFloat';

describe('number.isFloat(subject)', () => {
  it('checks if "subject" is a floating point number', () => {
    A.equal(isFloat(1.8), true);
    A.equal(isFloat(-1.8), true);
    A.equal(isFloat(Math.PI), true);
    A.equal(isFloat(1), false);
    A.equal(isFloat(1.0), false);
    A.equal(isFloat(-1.0), false);
    A.equal(isFloat(new Number(1)), false);
    A.equal(isFloat(NaN), false);
    A.equal(isFloat(Infinity), false);
    A.equal(isFloat(-Infinity), false);
    A.equal(isFloat('foo'), false);
    A.equal(isFloat([]), false);
    A.equal(isFloat({}), false);
    A.equal(isFloat(null), false);
    A.equal(isFloat(undefined), false);
  });
});
