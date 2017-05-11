/* eslint-env mocha */
import A from 'assert';
import trim from './trim';

describe('string.trim(str)', () => {
  it('invokes String.prototype.trim on "str"', () => {
    const assert = str => A.equal(trim(str), str.trim());
    assert(' foo  ');
    assert('\nfoo\n');
    assert('\nfoo\n ');
    assert('\rfoo\r');
    assert('\r\nfoo\r\n');
  });
});
