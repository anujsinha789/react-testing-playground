import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Button from "../Button";

afterEach(() => {
  cleanup(); // runs after every test case and cleans up the render.
});

test("should render button component", () => {
  render(<Button />);
  const Btn = screen.getByTestId("counter_btn");
  expect(Btn).toBeInTheDocument();
});

test("should render text passed as prop", () => {
  render(<Button text="Click me!!" />);
  const Btn = screen.getByTestId("counter_btn");
  expect(Btn).toHaveTextContent("Click me!!");
  expect(Btn).not.toHaveClass(); // Button component should not have any class.
});

test("should match snapshot", () => {
  const tree = renderer.create(<Button text="Click me!!" onClick={() => {}} />);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
