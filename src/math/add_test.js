/* eslint-env mocha */
import A from 'assert';
import add from './add';

describe('math.add(y, x)', () => {
  it('adds `x` to `y`', () => {
    A.equal(add(1, 2), 2 + 1);
    A.equal(add(3, 2), 2 + 3);
    A.equal(add(-1, 2), 2 + -1);
    A.equal(add(1, -2), -2 + 1);
    A.equal(add(-1, -2), -2 + -1);
  });

  it('allows partial application', () => {
    A.equal(add(2)(3), 3 + 2);
  });
});
