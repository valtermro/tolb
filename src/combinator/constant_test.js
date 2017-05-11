/* eslint-env mocha */
import A from 'assert';
import constant from './constant';

describe('combinator.constant(value)', () => {
  const fn = constant(2);

  it('creates a function that always returns "value"', () => {
    A.equal(fn(4), 2);
  });

  it('the new function has arity 1', () => {
    A.equal(fn.length, 1);
  });
});
