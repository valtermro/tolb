/* eslint-env mocha */
import A from 'assert';
import constant from './constant';

describe('combinator.constant(value)', () => {
  it('creates a function that always returns "value"', () => {
    const fn = constant(2);
    A.equal(fn(4), 2);
  });

  it('the new function has arity 1', () => {
    A.equal(constant(2).length, 1);
  });
});
