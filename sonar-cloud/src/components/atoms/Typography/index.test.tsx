import React from "react";
import { render, screen } from "@testing-library/react";
import Typography from "./index";

describe("Typography Component", () => {
  // Test if Typography renders correctly with default props
  test("renders Typography with default props", () => {
    render(<Typography variant="body1">Hello, World!</Typography>);
    const textElement = screen.getByText(/hello, world!/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("MuiTypography-body1"); // Check for the correct MUI class
  });

  // Test if Typography renders a headline
  test("renders Typography as a headline", () => {
    render(<Typography variant="h1">This is a Headline</Typography>);
    const headlineElement = screen.getByText(/this is a headline/i);
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveClass("MuiTypography-h1"); // Check for the correct MUI class
  });

  // Test if Typography applies custom styles
  test("applies custom styles", () => {
    render(
      <Typography variant="body1" style={{ color: "red" }}>
        Custom Color Text
      </Typography>
    );
    const textElement = screen.getByText(/custom color text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle("color: red"); // Check for the custom style
  });

  // Test if Typography handles different children types
  test("renders children as elements", () => {
    render(
      <Typography variant="body1">
        <strong>This is bold text</strong>
      </Typography>
    );
    const boldTextElement = screen.getByText(/this is bold text/i);
    expect(boldTextElement).toBeInTheDocument();
    expect(boldTextElement.innerHTML).toBe("This is bold text"); // Check for correct HTML structure
  });
});
