/* eslint-env mocha */
import A from 'assert';
import tap from './tap';

describe('combinator.tap(f)', () => {
  const f = v => f.v = v;

  it('returns a function that applies "f" to its argument', () => {
    const fn = tap(f);
    fn(42);

    A.equal(f.v, 42);
  });

  it('the returned function returns "f"', () => {
    const fn = tap(f);
    A.equal(fn('foo'), 'foo');
  });
});
