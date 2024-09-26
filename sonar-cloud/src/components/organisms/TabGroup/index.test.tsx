import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TabGroup from "./index";

describe("TabGroup", () => {
  const tabs = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
  ];

  const mockOnTabChange = jest.fn();

  it("renders the correct number of tabs", () => {
    render(
      <TabGroup tabs={tabs} activeTab="tab1" onTabChange={mockOnTabChange} />
    );

    const tabButtons = screen.getAllByRole("button");
    expect(tabButtons).toHaveLength(tabs.length);
  });

  it("renders the active tab correctly", () => {
    render(
      <TabGroup tabs={tabs} activeTab="tab1" onTabChange={mockOnTabChange} />
    );

    const activeTab = screen.getByText("Tab 1");
    expect(activeTab).toBeInTheDocument();
  });

  it("calls onTabChange when a tab is clicked", () => {
    render(
      <TabGroup tabs={tabs} activeTab="tab1" onTabChange={mockOnTabChange} />
    );

    const tab2Button = screen.getByText("Tab 2");
    fireEvent.click(tab2Button);
    expect(mockOnTabChange).toHaveBeenCalledWith("tab2");
  });
});
