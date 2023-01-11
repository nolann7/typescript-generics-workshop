import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

const array = [
  {
    name: 'John',
  },
  {
    name: 'Steve',
  },
];
type TAccum = {
  [key: string]: {
    name: string;
  };
};
const obj = array.reduce((accum: TAccum, item) => {
  accum[item.name] = item;
  return accum;
}, {});



it('Should resolve to an object where name is the key', () => {
  expect(obj).toEqual({
    John: {
      name: 'John',
    },
    Steve: {
      name: 'Steve',
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
