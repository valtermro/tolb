/* eslint-env mocha */
import A from 'assert';
import reduceValues from './reduceValues';
import util from '../../lib/stubs';

describe('object.reduceValues(fn, accum, obj)', () => {
  const obj = { foo: 'b', bar: 'c' };

  it('uses "fn" to reduce "accum" and the own values of "obj" to a single value', () => {
    A.equal(reduceValues(util.concat, 'a', obj), 'abc');
  });

  it('"fn" receives the current key as its third argument', () => {
    const keys = Object.keys(obj);
    let i = 0;
    reduceValues((_, __, k) => A.equal(k, keys[i++]), '', obj);
  });

  it('allows partial application', () => {
    A.equal(reduceValues(util.concat)('a')(obj), 'abc');
    A.equal(reduceValues(util.concat)('a', obj), 'abc');
    A.equal(reduceValues(util.concat, 'a')(obj), 'abc');
  });
});
