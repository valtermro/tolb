/* eslint-env mocha */
import A from 'assert';
import reduce from './reduce';

describe('object.reduce(fn, accum, obj)', () => {
  const fn = (a, _, v) => a + v;

  it('uses "fn" to reduce "accum" and the values of "obj" to a single value', () => {
    A.equal(reduce(fn, '-', { a: 'b', c: 'd' }), '-bd');
    A.equal(reduce(fn, '-', {}), '-');
  });

  it("uses only the object's own properties", () => {
    const prototyped = Object.create({ ignored: 'a' });
    prototyped.b = 'b';
    prototyped.c = 'c';

    A.equal(reduce(fn, '-', prototyped), '-bc');
  });

  it('"fn" receives the current key as its second argument', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
    let i = 0;
    reduce((__, k, _) => A.equal(k, keys[i++]), '', obj);
  });

  it('allows partial application', () => {
    const obj = { a: 'a' };

    A.equal(reduce(fn)('-')(obj), '-a');
    A.equal(reduce(fn)('-', obj), '-a');
    A.equal(reduce(fn, '-')(obj), '-a');
  });
});
