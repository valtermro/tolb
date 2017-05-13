/* eslint-env mocha */
import A from 'assert';
import keys from './keys';

describe('object.keys(obj)', () => {
  it('returns the list of own enumerable keys of "obj"', () => {
    const literal = { foo: 1, bar: 2 };
    const prototyped = Object.create({ baz: 3 });
    prototyped.foo = 1;
    prototyped.bar = 2;

    A.deepEqual(keys(literal), ['foo', 'bar']);
    A.deepEqual(keys(prototyped), ['foo', 'bar']);
  });
});
