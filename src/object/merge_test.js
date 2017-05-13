/* eslint-env mocha */
import A from 'assert';
import merge from './merge';

describe('object.merge(source, target)', () => {
  it('merges "source" and "target"', () => {
    const merged = merge({ a: 1, b: 2 }, { c: 3 });

    A.deepEqual(merged, { a: 1, b: 2, c: 3 });

    // target's keys come before the source's
    A.deepEqual(Object.keys(merged), ['c', 'a', 'b']);
  });

  it('does not mutate the original objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };

    merge(obj1, obj2);

    A.deepEqual(obj1, { a: 1 });
    A.deepEqual(obj2, { b: 2 });
  });

  it('keys in "source" override keys in "target"', () => {
    A.deepEqual(merge({ a: 10 }, { a: 1, b: 2 }), { a: 10, b: 2 });
  });

  it('merges only the object\'s own values', () => {
    const prototyped = Object.create({ ignored: 1 });
    prototyped.a = 1;

    A.deepEqual(merge(prototyped, { b: 2 }), { a: 1, b: 2 });
    A.deepEqual(merge({ b: 2 }, prototyped), { b: 2, a: 1 });
  });

  it('allows partial application', () => {
    A.deepEqual(merge({ a: 1 })({ b: 2 }), { b: 2, a: 1 });
  });
});
