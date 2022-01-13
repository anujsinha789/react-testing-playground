import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

test("should render button component", () => {
  render(<Button />);
  const Btn = screen.getByTestId("counter_btn");
  expect(Btn).toBeInTheDocument();
});
