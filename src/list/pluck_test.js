/* eslint-env mocha */
import A from 'assert';
import pluck from './pluck';

describe('pluck(prop, list)', () => {
  const list = [
    { name: 'foo', age: 11 },
    { name: 'bar', age: 12 },
    { age: 21 },
    { name: 'baz', age: 13 },
  ];

  it('returns an array with the values extracted from "prop" of each object in "list', () => {
    A.deepEqual(pluck('name', list), ['foo', 'bar', undefined, 'baz']);
  });

  it('allows partial application', () => {
    A.deepEqual(pluck('age')(list), [11, 12, 21, 13]);
  });
});
