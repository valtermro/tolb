/* eslint-env mocha */
import A from 'assert';
import value from './value';

describe('is.value(subject)', () => {
  it('checks if "subject" is neither null nor undefined', () => {
    A.equal(value(null), false);
    A.equal(value(undefined), false);
    A.equal(value(0), true);
    A.equal(value('foo'), true);
    A.equal(value(''), true);
    A.equal(value({}), true);
    A.equal(value([]), true);
    A.equal(value(false), true);
  });
});
