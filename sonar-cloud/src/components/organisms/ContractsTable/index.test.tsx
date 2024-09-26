import React from "react";
import { render, screen } from "@testing-library/react";
import ContractsTable from "./index";

describe("ContractsTable", () => {
  it("renders table headers correctly", () => {
    render(<ContractsTable />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Per payment/i)).toBeInTheDocument();
    expect(screen.getByText(/Total financed/i)).toBeInTheDocument();
    expect(screen.getByText(/Total available/i)).toBeInTheDocument();
  });

  it("renders table rows correctly", () => {
    render(<ContractsTable />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
    expect(screen.getByText(/Contract 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Contract 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Contract 4/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Available/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Monthly/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/\$12,000.25/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/-/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/\$126,722.64/i)[0]).toBeInTheDocument();
  });

  it("applies the correct styles to the 'Available' status text", () => {
    render(<ContractsTable />);
    const availableStatus = screen.getAllByText(/Available/i)[0];
    const computedStyle = window.getComputedStyle(availableStatus);
    expect(computedStyle.backgroundColor).toBe("rgba(255, 255, 255, 0.05)");
    // expect(computedStyle.borderRadius).toBe("4px");
    // expect(computedStyle.padding).toBe("2px 4px");
  });
});
