/* eslint-env mocha */
import A from 'assert';
import fork from './fork';

describe('combinator.fork(join, f, g)', () => {
  const sum = (x, y) => x + y;
  const double = x => x * 2;
  const tripple = x => x * 3;

  it('returns "join" applied to the values of "f" and "g" applied to the same argument', () => {
    const fn = fork(sum, double, tripple);
    A.equal(fn(2), 10);
  });

  it('allows partial application', () => {
    A.equal(fork(sum)(double)(tripple)(2), 10);
    A.equal(fork(sum, double)(tripple)(2), 10);
    A.equal(fork(sum)(double, tripple)(2), 10);
  });
});
