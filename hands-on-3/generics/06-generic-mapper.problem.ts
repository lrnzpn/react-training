import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to update the concatenateFirstNameAndLastName so that it makes sure 
// the user we pass in has a firstName and lastName that are properly typed as strings while allowing other properties to retain their types.
export const concatenateFirstNameAndLastName = (user: unknown) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

it("Should add fullName to an object which only contains firstName and lastName", () => {
  const users = [
    {
      firstName: "Matt",
      lastName: "Pocock",
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      firstName: "Matt",
      lastName: "Pocock",
      fullName: "Matt Pocock",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<{ firstName: string; lastName: string } & { fullName: string }>
      >
    >,
  ];
});

it("Should retain other properties passed in", () => {
  const users = [
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
      fullName: "Matt Pocock",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<
          { id: number; firstName: string; lastName: string } & {
            fullName: string;
          }
        >
      >
    >,
  ];
});

it("Should fail when the object passed in does not contain firstName", () => {
  const users = [
    {
      firstName: "Matt",
    },
  ];

  const newUsers = users.map(
    // @ts-expect-error
    concatenateFirstNameAndLastName,
  );
});
