/* eslint-env mocha */
import A from 'assert';
import clone from './clone';

describe('util.clone(obj)', () => {
  it('returns a copy of "obj"', () => {
    const assert = (input, immutable) => {
      const res = clone(input);
      A.deepEqual(res, input);
      if (!immutable)
        A.notStrictEqual(res, input);
    };
    assert([1, 2, 3], false);
    assert({ a: 1, b: 2, c: 3 }, false);
    assert('abcd', true);
    assert(null, true);
    assert(undefined, true);
    assert(true, true);
  });

  it('clones deeply', () => {
    const o = { a: 1 };
    let input, res;

    input = { a: { b: { c: 1 } } };
    res = clone(input);
    res.a.b.c = 2;
    A.equal(input.a.b.c, 1);

    input = [1, o];
    res = clone(input);
    res[0] = 2;
    res[1].a = 2;
    A.equal(input[0], 1);
    A.equal(input[1].a, 1);
    A.equal(o.a, 1);
  });
});
