/* eslint-env mocha */
import A from 'assert';
import trim from './trim';

describe('string.trim(str)', () => {
  it('invokes String.prototype.trim on "str"', () => {
    A.equal(trim(' foo  '), 'foo');
    A.equal(trim('\nfoo\n'), 'foo');
    A.equal(trim('\nfoo\n '), 'foo');
    A.equal(trim('\rfoo\r'), 'foo');
    A.equal(trim('\r\nfoo\r\n'), 'foo');
  });
});
