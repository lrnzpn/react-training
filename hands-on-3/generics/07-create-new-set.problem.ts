import { Equal, Expect } from "../helpers/type-utils";


// As of right now, the tests we have don't pass. This stringSet is supposed to be Set<string> 
// and the numberSet is supposed to be Set<number>, but both are Set<unknown>. But hey, at least unknownSet is happy with being Set<unknown>!

// Your challenge is to figure out how to update the createSet function so that everything behaves as expected.

export const createSet = () => {
  return new Set();
};

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknownSet, Set<unknown>>>,
];
