/* eslint-env mocha */
import A from 'assert';
import isNumber from './isNumber';

describe('object.isNumber(subject)', () => {
  it('checks if "subject" is a number', () => {
    A.equal(isNumber(0), true);
    A.equal(isNumber(1), true);
    A.equal(isNumber(-1), true);
    A.equal(isNumber(Math.PI), true);
    A.equal(isNumber(NaN), false);
    A.equal(isNumber(Infinity), false);
    A.equal(isNumber('foo'), false);
    A.equal(isNumber(new Number()), false);
    A.equal(isNumber([]), false);
    A.equal(isNumber(undefined), false);
    A.equal(isNumber(null), false);
  });
});
