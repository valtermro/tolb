/* eslint-env mocha */
import A from 'assert';
import isString from './isString';
import util from '../../lib/util';

describe('object.isString(subject)', () => {
  it('checks if "subject" is a string', () => {
    A.equal(isString(''), true);
    A.equal(isString('foo'), true);
    A.equal(isString(new String('')), false);
    A.equal(isString([]), false);
    A.equal(isString(util.arrayLike(1)), false);
    A.equal(isString(0), false);
    A.equal(isString(null), false);
    A.equal(isString(undefined), false);
  });
});
