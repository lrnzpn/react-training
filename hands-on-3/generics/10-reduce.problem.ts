import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to update the array.reduce so that it no longer uses an empty object as the accumulator. 
// Instead, it should create its output so that our Record test passes as expected.

// Check out the Record type from the TypeScript docs and the ,.reduce(), docs from MDN if you need a refresher.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// You can go deeper by checking out TypeScript's reduce type signature in VS Code.

const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
