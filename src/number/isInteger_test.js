/* eslint-env mocha */
import A from 'assert';
import isInteger from './isInteger';

describe('number.isInteger(subject)', () => {
  it('checks if "subject" is an integer', () => {
    A.equal(isInteger(1), true);
    A.equal(isInteger(0), true);
    A.equal(isInteger(-0), true);
    A.equal(isInteger(-1), true);
    A.equal(isInteger(1.0), true);
    A.equal(isInteger(-1.0), true);
    A.equal(isInteger(1.8), false);
    A.equal(isInteger(-1.8), false);
    A.equal(isInteger(Math.PI), false);
    A.equal(isInteger(NaN), false);
    A.equal(isInteger(Infinity), false);
    A.equal(isInteger(-Infinity), false);
    A.equal(isInteger(new Number(1)), false) // eslint-disable-line
    A.equal(isInteger('foo'), false);
    A.equal(isInteger([]), false);
    A.equal(isInteger({}), false);
    A.equal(isInteger(null), false);
    A.equal(isInteger(undefined), false);
  });
});
