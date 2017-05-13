/* eslint-env mocha */
import A from 'assert';
import map from './map';

describe('object.map(fn, obj)', () => {
  const literal = { bar: 2, baz: 3 };
  const prototyped = Object.create({ foo: 1 });
  prototyped.bar = 2;
  prototyped.baz = 3;

  it('transforms the own values of "obj" based on "fn"', () => {
    // the key (first argument) is ignored
    const double = (_, v) => v * 2;

    [literal, prototyped].forEach((obj) => {
      A.deepEqual(map(double, obj), { bar: 4, baz: 6 });
    });
  });

  it('"fn" receives the current key as its first argument', () => {
    const keys = Object.keys(literal);
    let i = 0;
    map(k => A.equal(k, keys[i++]), literal);
  });

  it('allows partial application', () => {
    A.deepEqual(map((_, v) => v)(literal), literal);
  });
});
