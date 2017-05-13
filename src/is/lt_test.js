/* eslint-env mocha */
import A from 'assert';
import lt from './lt';

describe('is.lt(other, value)', () => {
  it('checks if "value" is smaller than "other"', () => {
    A.equal(lt(2, 1), true);
    A.equal(lt(2, 2), false);
    A.equal(lt(1, 2), false);
  });

  it('compares strings', () => {
    A.equal(lt('bc', 'ab'), true);
    A.equal(lt('bc', 'de'), false);
    A.equal(lt('bc', 'd'), false);
  });

  it('allows partial application', () => {
    A.equal(lt(2)(1), true);
  });
});
