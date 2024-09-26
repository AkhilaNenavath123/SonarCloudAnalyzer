import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  test("renders button with correct label", () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    const buttonElement = screen.getByRole("button", { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with disabled state", () => {
    render(<Button label="Disabled Button" onClick={() => {}} disabled />);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(buttonElement).toBeDisabled();
  });

  test("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable Button" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", {
      name: /clickable button/i,
    });
    fireEvent.click(buttonElement); // Simulate the click event
    expect(handleClick).toHaveBeenCalledTimes(1); // Assert that the mock function was called
  });
});
