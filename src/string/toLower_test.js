/* eslint-env mocha */
import A from 'assert';
import toLower from './toLower';

describe('string.toLower(str)', () => {
  it('converts "str" to lower case', () => {
    A.equal(toLower('Foo'), 'foo');
    A.equal(toLower('FoO'), 'foo');
    A.equal(toLower('FoO BAr'), 'foo bar');
  });
});
