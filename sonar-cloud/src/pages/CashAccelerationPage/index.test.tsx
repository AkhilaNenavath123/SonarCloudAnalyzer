import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CashAccelerationPage from "./index";
import { TabGroupProps } from "../../components/organisms/TabGroup";

jest.mock("../../components/organisms/TabGroup", () => {
  return ({ tabs, activeTab, onTabChange }: TabGroupProps) => (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          style={{ fontWeight: activeTab === tab.value ? "bold" : "normal" }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
});

jest.mock("../../components/organisms/ContractsTable", () => () => (
  <div>Contracts Table Content</div>
));

jest.mock("../../components/organisms/CashKickTable", () => () => (
  <div>Cash Kicks Table Content</div>
));

describe("CashAccelerationPage", () => {
  it("renders without crashing", () => {
    render(<CashAccelerationPage />);

    expect(screen.getByText("Cash Acceleration")).toBeInTheDocument();
    expect(screen.getByText("ⓘ")).toBeInTheDocument();
    expect(screen.getByText("My Contracts")).toBeInTheDocument();
    expect(screen.getByText("My Cash Kicks")).toBeInTheDocument();
    expect(screen.getByText("Contracts Table Content")).toBeInTheDocument();
  });

  it("displays the cash kicks table when the cash kicks tab is active", () => {
    render(<CashAccelerationPage />);
    fireEvent.click(screen.getByText("My Cash Kicks"));
    expect(
      screen.queryByText("Contracts Table Content")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Cash Kicks Table Content")).toBeInTheDocument();
  });

  it("remains on contracts table when the contracts tab is active", () => {
    render(<CashAccelerationPage />);
    expect(screen.getByText("Contracts Table Content")).toBeInTheDocument();
    fireEvent.click(screen.getByText("My Cash Kicks"));
    fireEvent.click(screen.getByText("My Contracts"));
    expect(screen.getByText("Contracts Table Content")).toBeInTheDocument();
  });
});
