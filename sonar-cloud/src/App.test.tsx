import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders CashAccelerationPage component", () => {
    render(<App />);
    const pageTitle = screen.getByText(/Cash Acceleration/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
