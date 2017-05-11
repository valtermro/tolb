/* eslint-env mocha */
import A from 'assert';
import each from './each';
import util from '../../lib/stubs';

describe('object.each(fn, obj)', () => {
  const literal = { foo: 1, bar: 2 };
  const prototyped = Object.create({ baz: 3 });
  prototyped.foo = 1;
  prototyped.bar = 2;

  it('applies "fn" to each own key/value pair in "obj"', () => {
    const assert = (obj) => {
      const result = [];
      each((k, v) => result.push([k, v]), obj);
      A.deepEqual(result, [['foo', 1], ['bar', 2]]);
    };
    assert(literal);
    assert(prototyped);
  });

  it('returns "obj"', () => {
    A.strictEqual(each(util.noop, literal), literal);
  });

  it('allows partial application', () => {
    A.strictEqual(each(util.noop)(literal), literal);
  });
});
