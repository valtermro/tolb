/* eslint-env mocha */
import A from 'assert';
import replace from './replace';

describe('string.replace(search, replacement, str)', () => {
  const str = 'here we go';

  it('applies "str".replace to "search" and "replacement', () => {
    A.deepEqual(replace('here', 'there', str), 'there we go');
    A.deepEqual(replace('e', 'a', str), 'hare we go');
    A.deepEqual(replace(/e/g, 'a', str), 'hara wa go');
  });

  it('allows partial application', () => {
    A.equal(replace('h')('th', str), 'there we go');
    A.equal(replace('h', 'th')(str), 'there we go');
    A.equal(replace('h')('th')(str), 'there we go');
  });
});
