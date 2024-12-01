import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to work out how to specify a default value. When a type argument isn't passed in, it should be resolved as string.
export const createSet = <T>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

type tests = [
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof otherStringSet, Set<string>>>
];
