import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";
import userEvent from "@testing-library/user-event";

test("renders the Button component", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("Button is clickable", async () => {
  const handleClick = jest.fn(); // Mock function to track clicks
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);

  // Simulate a click event using `userEvent`
  await userEvent.click(buttonElement);

  // Check if the click handler was called once
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Button is disabled when disabled prop is passed", () => {
  render(<Button disabled>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);

  // Check if the button is disabled
  expect(buttonElement).toBeDisabled();
});

test("Button renders with different variants and colors", () => {
  const { rerender } = render(
    <Button variant="contained" color="primary">
      Contained Primary
    </Button>
  );

  let buttonElement = screen.getByText(/contained primary/i);
  expect(buttonElement).toHaveClass("MuiButton-containedPrimary");

  rerender(
    <Button variant="outlined" color="secondary">
      Outlined Secondary
    </Button>
  );
  buttonElement = screen.getByText(/outlined secondary/i);
  expect(buttonElement).toHaveClass("MuiButton-outlinedSecondary");

  rerender(
    <Button variant="text" color="success">
      Text Success
    </Button>
  );
  buttonElement = screen.getByText(/text success/i);
  expect(buttonElement).toHaveClass("MuiButton-textSuccess");
});

test("Button handles no onClick prop", async () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);

  // Simulate a click event using `userEvent`
  await userEvent.click(buttonElement);

  // Since no onClick handler is passed, no error should occur
  expect(buttonElement).toBeInTheDocument();
});

test("Button renders with different sizes", () => {
  const { rerender } = render(<Button size="small">Small Button</Button>);

  let buttonElement = screen.getByText(/small button/i);
  expect(buttonElement).toHaveClass("MuiButton-sizeSmall");

  rerender(<Button size="medium">Medium Button</Button>);
  buttonElement = screen.getByText(/medium button/i);
  expect(buttonElement).toHaveClass("MuiButton-sizeMedium");

  rerender(<Button size="large">Large Button</Button>);
  buttonElement = screen.getByText(/large button/i);
  expect(buttonElement).toHaveClass("MuiButton-sizeLarge");
});
