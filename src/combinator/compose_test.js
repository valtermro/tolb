/* eslint-env mocha */
import A from 'assert';
import compose from './compose';

describe('combinator.compose(...fns)', () => {
  const divBy5 = x => x / 5;
  const div10 = x => 10 / x;
  const sum = (x, y) => x + y;

  it('composes "fns" from right to left', () => {
    const fn = compose(div10, divBy5, sum);
    A.equal(fn(20, 30), 1);
  });

  it('reports the arity of the rightmost function', () => {
    A.equal(compose(div10).length, 1);
    A.equal(compose(div10, divBy5).length, 1);
    A.equal(compose(div10, sum).length, 2);
  });
});
