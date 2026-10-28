// A number in [0, 1), like Math.random
export type Random = () => number;

// Unpredictable, unlike Math.random: the browser's cryptographic generator, in [0, 1).
export const cryptoRandom: Random = () => crypto.getRandomValues(new Uint32Array(1))[0]! / 2 ** 32;

// A shuffled copy (Fisher–Yates); the input is left as is.
export function shuffle<T>(items: readonly T[], random: Random = cryptoRandom): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}
