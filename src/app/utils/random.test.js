import { cryptoRandom, shuffle } from '#root/dist/src/app/utils/random.js';

describe('random', () => {
  it('cryptoRandom stays in [0, 1)', () => {
    for (let i = 0; i < 100; i++) {
      const value = cryptoRandom();
      expect(value < 0).toBeFalsy();
      expect(value).toBeLessThan(1);
    }
  });

  it('shuffle keeps every item and leaves the input as is', () => {
    const items = [1, 2, 3, 4, 5];
    const shuffled = shuffle(items);
    expect([...shuffled].sort()).toEqual(items);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it('shuffle follows the given random source (Fisher–Yates)', () => {
    // Always 0: each item is swapped with the first one in turn
    expect(shuffle([1, 2, 3, 4], () => 0)).toEqual([2, 3, 4, 1]);
    // Just under 1: every item swaps with itself
    expect(shuffle([1, 2, 3, 4], () => 0.999)).toEqual([1, 2, 3, 4]);
  });
});
