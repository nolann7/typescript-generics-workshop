import { expect, it } from 'vitest';
import { T } from 'vitest/dist/global-60f880c6';
import { Equal, Expect } from '../helpers/type-utils';

const returnBothOfWhatIPassIn = <T, U>(a: T, b: U) => {
  return {
    a,
    b,
  };
};

it('Should return an object of the arguments you pass', () => {
  const result = returnBothOfWhatIPassIn('a', 1);

  expect(result).toEqual({
    a: 'a',
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
