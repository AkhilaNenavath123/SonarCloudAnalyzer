import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index"; // Adjust the import path if necessary
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
