/* eslint-env mocha */
import A from 'assert';
import isArray from './isArray';
import util from '../../lib/util';

describe('object.isArray(subject)', () => {
  function MyArray() { /* */ }
  MyArray.prototype = Object.create(Array.prototype);

  it('checks if "subject" is an array', () => {
    A.equal(isArray([]), true);
    A.equal(isArray(new Array()), true);
    A.equal(isArray(new MyArray()), false);
    A.equal(isArray(''), false);
    A.equal(isArray(util.arrayLike(1)), false);
    A.equal(isArray(0), false);
    A.equal(isArray(null), false);
    A.equal(isArray(undefined), false);
  });
});
