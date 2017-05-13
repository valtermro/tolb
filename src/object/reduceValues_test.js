/* eslint-env mocha */
import A from 'assert';
import reduceValues from './reduceValues';

describe('object.reduceValues(fn, accum, obj)', () => {
  const concat = (a, b) => a.concat(b);

  it('uses "fn" to reduce "accum" and the values of "obj" to a single value', () => {
    const obj = { a: 'b', c: 'd' };
    A.equal(reduceValues(concat, 'a', obj), 'abd');
  });

  it("uses only the object's own properties", () => {
    const prototyped = Object.create({ a: 'a' });
    prototyped.b = 'b';
    prototyped.c = 'c';

    A.equal(reduceValues(concat, '-', prototyped), '-bc');
  });

  it('"fn" receives the current key as its third argument', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
    let i = 0;
    reduceValues((_, __, k) => A.equal(k, keys[i++]), '', obj);
  });

  it('allows partial application', () => {
    const obj = { a: 'a' };
    A.equal(reduceValues(concat)('')(obj), 'a');
    A.equal(reduceValues(concat)('', obj), 'a');
    A.equal(reduceValues(concat, '')(obj), 'a');
  });
});
