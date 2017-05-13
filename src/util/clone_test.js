/* eslint-env mocha */
import A from 'assert';
import clone from './clone';

describe('util.clone(obj)', () => {
  it('returns a copy of "obj"', () => {
    [ // mutable values
      [1, 2, 3],
      { a: 1, b: 2 },
    ].forEach((value) => {
      const cloned = clone(value);
      A.deepEqual(value, cloned);

      // ensures the value was copied rather than just returned
      A.notStrictEqual(value, cloned);
    });

    [ // primitive values
      'abc',
      null,
      true,
      undefined,
    ].forEach((value) => {
      // primitives are immutable by default so no need to make a copy
      A.equal(value, clone(value));
    });
  });

  it('ignores the prototype chain of an object', () => {
    const prototyped = Object.create({ foo: 1 });
    prototyped.baz = 3;

    A.deepEqual(clone(prototyped), { baz: 3 }) ;
  });

  it('clones deeply', () => {
    let value, cloned;

    value = { a: { b: { c: 1 } } };
    cloned = clone(value);
    cloned.a.b.c = 2;

    // the cloned object was updated,...
    A.equal(cloned.a.b.c, 2);

    // ...the original wasn't
    A.equal(value.a.b.c, 1);

    const o = { a: 1 };
    value = [1, o];
    cloned = clone(value);
    cloned[0] = 2;
    cloned[1].a = 2;

    // the cloned object has the new values
    A.equal(cloned[0], 2);
    A.equal(cloned[1].a, 2);

    // the original objects have not changed
    A.equal(value[0], 1);
    A.equal(value[1].a, 1);
    A.equal(o.a, 1);
  });
});
