import React from "react";
import { render, screen } from "@testing-library/react";
import CardContentMolecule from "./index";
import Button from "../../atoms/Button";

jest.mock("../../atoms/Button", () => {
  return jest.fn(({ children }) => <button>{children}</button>);
});

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

  test("renders CardContentMolecule with title, description, and button", () => {
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const buttonElement = screen.getByText(buttonText);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button as a Button component", () => {
    expect(Button).toHaveBeenCalledWith(
      expect.objectContaining({ variant: "contained", children: buttonText }),
      {}
    );
  });

  test("renders correct number of elements", () => {
    const elements = screen.getAllByText(
      /card title|this is a description of the card|click me/i
    );
    expect(elements.length).toBe(3); // title, description, button
  });
});
