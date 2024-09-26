import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TabButton } from "./index";

describe("TabButton Component", () => {
  it("renders with active state", () => {
    render(<TabButton active={true}>Active Tab</TabButton>);

    const buttonElement = screen.getByText(/Active Tab/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: #6C5DD3");
    expect(buttonElement).toHaveStyle("color: rgb(255, 255, 255)");
  });

  it("renders with inactive state", () => {
    render(<TabButton active={false}>Inactive Tab</TabButton>);

    const buttonElement = screen.getByText(/Inactive Tab/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: #262529");
    expect(buttonElement).toHaveStyle("color: rgb(189, 189, 189)");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(
      <TabButton active={false} onClick={handleClick}>
        Clickable Tab
      </TabButton>
    );

    const buttonElement = screen.getByText(/Clickable Tab/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
