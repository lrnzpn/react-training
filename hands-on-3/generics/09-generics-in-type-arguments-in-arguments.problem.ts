import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to make it so when we get the props from the cloned component, they are exactly the same as the original. 
// In this case, we should get a: number, b: number, and c: number.

// Hints: You shouldn't edit the Component class, but instead make the cloneComponent function generic. 
// The function should be given a way of understanding the props for the Component being cloned, and have a way of returning them.

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = (component: unknown) => {
  return new Component(component.getProps());
};

it("Should clone the props from a passed-in Component", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const clonedComponent = cloneComponent(component);

  const result = clonedComponent.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
});
