/* eslint-env mocha */
import A from 'assert';
import string from './string';
import util from '../../lib/util';

describe('is.string(subject)', () => {
  it('checks if "subject" is a string', () => {
    A.equal(string(''), true);
    A.equal(string('foo'), true);
    A.equal(string(new String('')), false);
    A.equal(string([]), false);
    A.equal(string(util.arrayLike(1)), false);
    A.equal(string(0), false);
    A.equal(string(null), false);
    A.equal(string(undefined), false);
  });
});
