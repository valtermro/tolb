/* eslint-env mocha */
import A from 'assert';
import constant from './constant';

describe('constant(a)', () => {
  const fn = constant(2);

  it('creates a function that returns "a"', () => {
    A.equal(fn(4), 2);
  });

  it('the new function has arity 1', () => {
    A.equal(fn.length, 1);
  });
});
