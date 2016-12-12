/* eslint-env mocha */
import A from 'assert';
import seq from './seq';

describe('seq(...fns)', () => {
  const calls = [];
  const foo1 = (value) => {
    foo1.value = value;
    calls.push(foo1);
  };
  const foo2 = (value) => {
    foo2.value = value;
    calls.push(foo2);
  };
  const foo3 = (value) => {
    foo3.value = value;
    calls.push(foo3);
  };

  it('sequentially applies "fns" to the same value', () => {
    seq(foo1, foo2, foo3)(10);

    A.equal(foo1.value, 10);
    A.equal(foo2.value, 10);
    A.equal(foo3.value, 10);
    A.deepEqual(calls, [foo1, foo2, foo3], '"fns" should have been called in order');
  });
});
