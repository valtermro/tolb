/* eslint-env mocha */
import A from 'assert';
import fork from './fork';
import util from '../../build/util';

describe('fork(join, f, g)', () => {
  const sum = (x, y) => x + y;

  it('returns "join" applied to the values of "f" and "g" applied to the same argument', () => {
    A.equal(fork(sum, util.double, util.tripple)(2), 10);
  });

  it('allows partial application', () => {
    A.equal(fork(sum)(util.double)(util.tripple)(2), 10);
    A.equal(fork(sum, util.double)(util.tripple)(2), 10);
    A.equal(fork(sum)(util.double, util.tripple)(2), 10);
  });
});
