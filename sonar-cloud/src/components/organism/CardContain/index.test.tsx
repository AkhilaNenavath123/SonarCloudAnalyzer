import React from "react";
import { render, screen } from "@testing-library/react";
import CardContain from "./index";
import CardContentMolecule from "../../molecules/TextButton";

jest.mock("../../molecules/TextButton"); // Mock the CardContentMolecule component

describe("CardContain Component", () => {
  beforeEach(() => {
    render(<CardContain />);
  });

  // Test if the CardContentMolecule renders with correct props
  test("renders CardContentMolecule with correct props", () => {
    expect(CardContentMolecule).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Launch a new Cash Kick",
        description: "You have upto $0 available for a new cash advance",
        buttonText: "New Cash Kick",
      }),
      {}
    );
  });

  // Test if the center wrapper has the correct styles
  test("renders CenterWrapper with correct styles", () => {
    const centerWrapper = screen.getByTestId("center-wrapper");
    expect(centerWrapper).toBeInTheDocument();
    expect(centerWrapper).toHaveStyle("display: flex");
    expect(centerWrapper).toHaveStyle("justify-content: center");
    expect(centerWrapper).toHaveStyle("align-items: center");
    expect(centerWrapper).toHaveStyle("height: 100vh");
    expect(centerWrapper).toHaveStyle("background-color: #928d8d");
  });
});
