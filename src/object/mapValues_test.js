/* eslint-env mocha */
import A from 'assert';
import mapValues from './mapValues';

describe('object.mapValues(fn, obj)', () => {
  const literal = { bar: 2, baz: 3 };
  const prototyped = Object.create({ foo: 1 });
  prototyped.bar = 2;
  prototyped.baz = 3;

  it('transforms the own values of "obj" based on "fn"', () => {
    // the key (second argument) is ignored
    const double = (v, _) => v * 2;

    [literal, prototyped].forEach((obj) => {
      A.deepEqual(mapValues(double, obj), { bar: 4, baz: 6 });
    });
  });

  it('"fn" receives the current key as its second argument', () => {
    const keys = Object.keys(literal);
    let i = 0;
    mapValues((_, k) => A.equal(k, keys[i++]), literal);
  });

  it('allows partial application', () => {
    A.deepEqual(mapValues((v, _) => v)(literal), literal);
  });
});
