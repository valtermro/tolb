/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';

describe('reduce(fn, accum, obj)', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const fn = (a, k, v) => a + k + v;

  it('uses "fn" to reduce "accum" and the own values of "obj" to a single value', () => {
    A.equal(reduce(fn, '-', obj), '-a1b2c3');
    A.equal(reduce(fn, '-', {}), '-');
  });

  it('allows partial application', () => {
    A.equal(reduce(fn)('-')(obj), '-a1b2c3');
    A.equal(reduce(fn)('-', obj), '-a1b2c3');
    A.equal(reduce(fn, '-')(obj), '-a1b2c3');
  });
});
