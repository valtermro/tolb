/* eslint-env mocha */
import A from 'assert';
import merge from './merge';

describe('object.merge(source, target)', () => {
  function Foo() { this.foo = 1; }
  Foo.prototype.blegh = 3;

  const prototyped = new Foo();
  prototyped.bar = 2;

  const obj1 = { foo: 1, bar: 2 };
  const obj2 = { baz: 3 };

  const wanted = { foo: 1, bar: 2, baz: 3 };

  it('merges "source" and "target"', () => {
    A.deepEqual(merge(obj1, obj2), wanted);
  });

  it('does not mutate the original objects', () => {
    A.deepEqual(obj1, { foo: 1, bar: 2 });
    A.deepEqual(obj2, { baz: 3 });
  });

  it('keys in "source" override keys in "target"', () => {
    A.deepEqual(merge({ bar: 10 }, obj1), { bar: 10, foo: 1 });
  });

  it('merges only the object\'s own values', () => {
    A.deepEqual(merge(prototyped, obj2), wanted);
    A.deepEqual(merge(obj2, prototyped), wanted);
  });

  it('allows partial application', () => {
    A.deepEqual(merge(obj1)(obj2), wanted);
  });
});
