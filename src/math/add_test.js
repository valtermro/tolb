/* eslint-env mocha */
import A from 'assert';
import add from './add';

describe('add(y, x)', () => {
  it('adds `x` to `y`', () => {
    A.equal(add(1, 2), 3);
    A.equal(add(3, 2), 5);
    A.equal(add(-1, 2), 1);
    A.equal(add(1, -2), -1);
    A.equal(add(-1, -2), -3);
  });

  it('allows partial application', () => {
    A.equal(add(2)(3), 5);
  });
});
