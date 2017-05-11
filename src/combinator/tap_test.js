/* eslint-env mocha */
import A from 'assert';
import tap from './tap';

describe('combinator.tap(f)', () => {
  const f = v => f.v = v;

  it('returns a function that applies "f" to its argument and then returns that argument', () => {
    const v = tap(f)(2);
    A.equal(f.v, 2, 'should apply f');
    A.equal(v, 2, 'should returns the argument');
  });
});
