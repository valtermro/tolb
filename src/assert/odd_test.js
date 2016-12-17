/* eslint-env mocha */
import A from 'assert';
import odd from './odd';

describe('odd(subject)', () => {
  function test(value, wanted) {
    A.equal(odd(value), wanted);
  }

  it('checks if "subject" is an odd number', () => {
    for (let i = 0; i < 1000; i++)
      test(i, i % 2 !== 0);
  });

  it('returns false if "subject" is a float', () => {
    test(1.1, false);
    test(1.1, false);
    test(1.2, false);
    test(2.1, false);
    test(2.2, false);
  });

  it('returns false if "subject" is not a number', () => {
    test('foo', false);
    test({}, false);
    test([], false);
    test(null, false);
    test(new Number(1), false);
  });
});
