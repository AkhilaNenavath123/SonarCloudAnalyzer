import React from "react";
import { render, screen } from "@testing-library/react";
import CardContentMolecule from "./index";
import Button from "../../atoms/Button";

jest.mock("../../atoms/Button"); // Mock Button component

describe("CardContentMolecule Component", () => {
  const title = "Card Title";
  const description = "This is a description of the card.";
  const buttonText = "Click Me";

  beforeEach(() => {
    render(
      <CardContentMolecule
        title={title}
        description={description}
        buttonText={buttonText}
      />
    );
  });

  // Test if the component renders correctly with provided props
  test("renders CardContentMolecule with title, description, and button", () => {
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const buttonElement = screen.getByText(buttonText);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  // Test if the button is rendered as a Button component
  test("renders the button as a Button component", () => {
    expect(Button).toHaveBeenCalledWith(
      expect.objectContaining({ variant: "contained", children: buttonText }),
      {}
    );
  });

  // Test if the correct number of elements are rendered
  test("renders correct number of elements", () => {
    const elements = screen.getAllByText(
      /card title|this is a description of the card|click me/i
    );
    expect(elements.length).toBe(3); // title, description, button
  });
});
