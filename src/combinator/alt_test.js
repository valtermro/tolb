/* eslint-env mocha */
import A from 'assert';
import alt from './alt';

describe('combinator.alt(f, g)', () => {
  const f = x => x * 2;
  const g = (x) => {
    g.called = true;
    return x * 3;
  };
  g.called = false;

  it('if "f" returns a value, return it and exit', () => {
    A.equal(alt(f, g)(2), 4);
    A.equal(g.called, false, 'the second function should not be called');
  });

  it('if "f" does not returns a value, calls "g"', () => {
    A.equal(alt(() => null, g)(2), 6);
  });

  it('allows partial application', () => {
    A.equal(alt(f)(g)(2), 4);
  });
});
