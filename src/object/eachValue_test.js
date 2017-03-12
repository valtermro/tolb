/* eslint-env mocha */
import A from 'assert';
import eachValue from './eachValue';
import util from '../../build/util';

describe('eachValue(fn, obj)', () => {
  const literal = { foo: 1, bar: 2 };
  const prototyped = Object.create({ baz: 3 });
  prototyped.foo = 1;
  prototyped.bar = 2;

  it('applies "fn" to each own value in "obj"', () => {
    const assert = (obj) => {
      const result = [];
      eachValue(v => result.push(v), obj);
      A.deepEqual(result, [1, 2]);
    };
    assert(literal);
    assert(prototyped);
  });

  it('"fn" receives the current key as its second argument', () => {
    const keys = Object.keys(literal);
    let i = 0;
    eachValue((_, k) => A.equal(k, keys[i++]), literal);
  });

  it('returns "obj"', () => {
    A.strictEqual(eachValue(util.id, literal), literal);
  });

  it('allows partial application', () => {
    A.strictEqual(eachValue(util.id)(literal), literal);
  });
});
