import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to find a syntax that we can type the function with that will let us return whatever we want.
const returnWhatIPassIn = (t: unknown) => {
  return t;
};

const one = returnWhatIPassIn(1); // return 1 if we pass in 1
const maya = returnWhatIPassIn("maya"); // return maya if we pass in maya

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof maya, "maya">>];
