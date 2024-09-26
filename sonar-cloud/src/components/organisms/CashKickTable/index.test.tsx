import React from "react";
import { render, screen } from "@testing-library/react";
import CashKicksTable from "./index";

describe("CashKicksTable", () => {
  it("renders table headers correctly", () => {
    render(<CashKicksTable />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Maturity/i)).toBeInTheDocument();
    expect(screen.getByText(/Total received/i)).toBeInTheDocument();
    expect(screen.getByText(/Total financed/i)).toBeInTheDocument();
  });

  it("renders table rows correctly", () => {
    render(<CashKicksTable />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(7);
    expect(screen.getByText(/My first advance/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Pending/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Apr 03, 2022/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/\$150,000.00/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/\$170,454.55/i)[0]).toBeInTheDocument();
  });

  it("applies correct styles for status 'Pending'", () => {
    render(<CashKicksTable />);
    const pendingStatusElements = screen.getAllByText(/Pending/i);
    pendingStatusElements.forEach((status) => {
      expect(status).toHaveStyle(`
        background-color: rgba(132, 135, 135, 0.2);
        border-radius: 4px;
        padding: 2px 4px;
      `);
    });
  });
});
