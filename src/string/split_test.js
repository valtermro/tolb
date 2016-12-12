/* eslint-env mocha */
import A from 'assert';
import split from './split';

describe('split(sep, str)', () => {
  const str = 'foo,bar';

  it('applies "str".split to "sep"', () => {
    A.deepEqual(split(',', str), str.split(','));
  });

  it('allows partial application', () => {
    A.deepEqual(split(',')(str), str.split(','));
  });
});
