/* eslint-env mocha */
import A from 'assert';
import values from './values';

describe('object.values(obj)', () => {
  it('returns the list of own values in "obj"', () => {
    const literal = { a: 1, b: 'foo', c: undefined };
    const prototyped = Object.create({ a: 1 });
    prototyped.b = 2;
    prototyped.c = 3;

    A.deepEqual(values(literal), [1, 'foo', undefined]);
    A.deepEqual(values(prototyped), [2, 3]);
  });
});
