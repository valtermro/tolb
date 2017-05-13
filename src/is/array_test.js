/* eslint-env mocha */
import A from 'assert';
import array from './array';
import util from '../../lib/util';

describe('is.array(subject)', () => {
  function MyArray() { /* */ }
  MyArray.prototype = Object.create(Array.prototype);

  it('checks if "subject" is an array', () => {
    A.equal(array([]), true);
    A.equal(array(new Array()), true);
    A.equal(array(new MyArray()), false);
    A.equal(array(''), false);
    A.equal(array(util.arrayLike(1)), false);
    A.equal(array(0), false);
    A.equal(array(null), false);
    A.equal(array(undefined), false);
  });
});
