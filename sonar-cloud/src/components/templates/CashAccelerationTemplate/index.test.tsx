import React from "react";
import { render, screen } from "@testing-library/react";
import CashAccelerationTemplate from "./index";

describe("CashAccelerationTemplate", () => {
  const title = "Cash Acceleration";
  const infoIcon = <span>ℹ️</span>;
  const tabGroup = <div>Tab Group Content</div>;
  const tableContent = <div>Table Content</div>;

  it("renders without crashing", () => {
    render(
      <CashAccelerationTemplate
        title={title}
        infoIcon={infoIcon}
        tabGroup={tabGroup}
        tableContent={tableContent}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("ℹ️")).toBeInTheDocument();
    expect(screen.getByText("Tab Group Content")).toBeInTheDocument();
    expect(screen.getByText("Table Content")).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(
      <CashAccelerationTemplate
        title={title}
        infoIcon={infoIcon}
        tabGroup={tabGroup}
        tableContent={tableContent}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders the info icon", () => {
    render(
      <CashAccelerationTemplate
        title={title}
        infoIcon={infoIcon}
        tabGroup={tabGroup}
        tableContent={tableContent}
      />
    );

    expect(screen.getByText("ℹ️")).toBeInTheDocument();
  });

  it("renders the tab group", () => {
    render(
      <CashAccelerationTemplate
        title={title}
        infoIcon={infoIcon}
        tabGroup={tabGroup}
        tableContent={tableContent}
      />
    );

    expect(screen.getByText("Tab Group Content")).toBeInTheDocument();
  });

  it("renders the table content", () => {
    render(
      <CashAccelerationTemplate
        title={title}
        infoIcon={infoIcon}
        tabGroup={tabGroup}
        tableContent={tableContent}
      />
    );

    expect(screen.getByText("Table Content")).toBeInTheDocument();
  });
});
