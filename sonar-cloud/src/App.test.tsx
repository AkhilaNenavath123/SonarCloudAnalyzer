import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  window.alert = jest.fn(); // Mocking the alert function
});

describe("App Component", () => {
  test("renders App component with all buttons", () => {
    render(<App />);

    // Check for the main heading
    const headingElement = screen.getByText(/welcome to the app!/i);
    expect(headingElement).toBeInTheDocument();

    // Check for button texts
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
    expect(screen.getByText(/outlined button/i)).toBeInTheDocument();
    expect(screen.getByText(/text button/i)).toBeInTheDocument();
    expect(screen.getByText(/disabled button/i)).toBeInTheDocument();
  });

  test("handles click event on Click Me button", async () => {
    render(<App />);
    const buttonElement = screen.getByText(/click me/i);

    // Simulate a click
    await userEvent.click(buttonElement);

    // Assert alert has been called
    expect(window.alert).toHaveBeenCalledWith("Button clicked!");
  });

  test("checks the Disabled button state", () => {
    render(<App />);
    const disabledButtonElement = screen.getByText(/disabled button/i);

    // Assert that the button is disabled
    expect(disabledButtonElement).toBeDisabled();

    // Ensure that the alert for the disabled button does not fire
    expect(window.alert).not.toHaveBeenCalledWith(
      "This button should be disabled"
    );
  });
});
