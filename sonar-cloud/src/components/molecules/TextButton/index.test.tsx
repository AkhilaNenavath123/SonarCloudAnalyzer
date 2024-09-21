import React from "react";
import { render, screen } from "@testing-library/react";
import TextButton from "./index";

test("renders TextButton with title, description, and button", () => {
  const title = "Card Title";
  const description = "This is a description of the card";
  const buttonText = "Click Me";

  // Render the component
  render(
    <TextButton
      title={title}
      description={description}
      buttonText={buttonText}
    />
  );

  // Find the elements by their text (using regex for flexible matching)
  const titleElement = screen.getByText(/card title/i);
  const descriptionElement = screen.getByText(
    /this is a description of the card/i
  );
  const buttonElement = screen.getByText(/click me/i);

  // Assert that these elements are in the document
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("renders correct number of elements", () => {
  const title = "Card Title";
  const description = "This is a description of the card";
  const buttonText = "Click Me";

  // Render the component
  render(
    <TextButton
      title={title}
      description={description}
      buttonText={buttonText}
    />
  );

  // Find the title, description, and button
  const elements = screen.getAllByText(
    /card title|this is a description of the card|click me/i
  );

  // Expect 3 elements (title, description, button)
  expect(elements.length).toBe(3);
});
