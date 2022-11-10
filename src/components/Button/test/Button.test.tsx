/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom";
test("disabled button", () => {
  render(<Button disabled>button</Button>);
  const buttonElement = screen.getByRole("button", { name: /button/i });
  expect(buttonElement).toHaveClass("zen-disabled");
  expect(buttonElement).toBeDisabled();
});

test("button contain text and loader both while loading", () => {
  render(<Button loading>button</Button>);
  const buttonElement = screen.getByRole("button", { name: /button/i });
  expect(buttonElement).toHaveTextContent("button");

  const loadingIcon = document.querySelector(".ant-loading-icon");
  expect(loadingIcon).toBeInTheDocument();
});
