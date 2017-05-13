/* eslint-env mocha */
import A from 'assert';
import identity from './identity';

describe('combinator.identity(v)', () => {
  it('returns its argument', () => {
    const v = [1, 2];
    A.strictEqual(identity(v), v);
  });
});
