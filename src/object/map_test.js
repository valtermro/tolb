/* eslint-env mocha */
import A from 'assert';
import map from './map';
import util from '../../_dev/util';

describe('map(fn, obj)', () => {
  const fn = util.double;
  const wanted = { bar: 4, baz: 6 };
  const literal = { bar: 2, baz: 3 };
  const prototyped = Object.create({ foo: 1 });
  prototyped.bar = 2;
  prototyped.baz = 3;

  it('transforms the own values of "obj" based on "fn"', () => {
    const assert = (input) => {
      A.deepEqual(map(fn, input), wanted);
    };
    assert(literal);
    assert(prototyped);
  });

  it('"fn" receives the current key as its second argument', () => {
    const keys = Object.keys(literal);
    let i = 0;
    map((_, k) => {
      A.equal(k, keys[i++]);
    }, literal);
  });

  it('allows partial application', () => {
    A.deepEqual(map(fn)(literal), wanted);
  });
});
