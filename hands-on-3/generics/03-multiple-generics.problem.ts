import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to apply the syntax we've used so far to get the two independent parameters typed inside of the of object that is returned.
const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {
  return {
    a,
    b,
  };
};

it("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({
    a: "a",
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
