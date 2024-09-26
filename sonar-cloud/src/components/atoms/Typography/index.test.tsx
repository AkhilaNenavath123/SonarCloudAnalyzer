import React from "react";
import { render, screen } from "@testing-library/react";
import { Typography } from "./index";

describe("Typography Component", () => {
  test("renders typography with correct text", () => {
    render(<Typography variant="h1">Test Heading</Typography>);
    const typographyElement = screen.getByRole("heading", {
      name: /test heading/i,
    });
    expect(typographyElement).toBeInTheDocument();
  });

  test("renders typography with correct variant", () => {
    render(<Typography variant="body1">Test Body</Typography>);
    const typographyElement = screen.getByText(/test body/i);
    expect(typographyElement.tagName).toBe("P");
  });

  test("renders typography with specific color", () => {
    render(
      <Typography variant="h2" color="primary">
        Test Color
      </Typography>
    );
    const typographyElement = screen.getByRole("heading", {
      name: /test color/i,
    });
    expect(typographyElement).toHaveStyle({ color: "rgb(25, 118, 210)" }); // Color code for MUI primary color
  });

  test("renders typography with additional props", () => {
    render(<Typography variant="h6">Centered Text</Typography>);
  });
});
