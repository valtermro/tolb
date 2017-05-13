/* eslint-env mocha */
import A from 'assert';
import pipe from './pipe';

describe('combinator.pipe(...fns)', () => {
  const divBy5 = x => x / 5;
  const div10 = x => 10 / x;
  const sum = (x, y) => x + y;

  it('composes "fns" from left to right', () => {
    const fn = pipe(sum, divBy5, div10);
    A.equal(fn(20, 30), 1);
  });

  it('reports the arity of the piped function', () => {
    A.equal(pipe(div10).length, 1);
    A.equal(pipe(divBy5, div10).length, 1);
    A.equal(pipe(sum, div10).length, 2);
  });
});
