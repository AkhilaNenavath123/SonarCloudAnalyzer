import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "#1e1e1e",
  color: "white",
});

const StyledTableCell = styled(TableCell)({
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});

const StyledHeaderCell = styled(TableCell)({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});

const StyledTableRow = styled(TableRow)({});

const StatusCell = styled(TableCell)({
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});

const StatusText = styled("span")<{ status: string }>(({ status }) => ({
  backgroundColor:
    status === "Available" ? "rgb(132, 135, 135) !important" : "transparent",
  borderRadius: status === "Available" ? "4px" : "0",
  padding: status === "Available" ? "2px 4px" : "0",
  display: "inline-block",
}));

const rows = [
  {
    name: "Contract 1",
    status: "Available",
    type: "Monthly",
    payment: "$12,000.25",
    totalFinanced: "-",
    totalAvailable: "$126,722.64",
  },
  {
    name: "Contract 3",
    status: "Available",
    type: "Monthly",
    payment: "$6,000.00",
    totalFinanced: "-",
    totalAvailable: "$63,360.00",
  },
  {
    name: "Contract 4",
    status: "Available",
    type: "Monthly",
    payment: "$6,000.00",
    totalFinanced: "-",
    totalAvailable: "$63,360.00",
  },
];

const ContractsTable = () => {
  return (
    <Paper>
      <StyledTableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="contracts table">
          <TableHead>
            <TableRow>
              <StyledHeaderCell>Name</StyledHeaderCell>
              <StyledHeaderCell>Status</StyledHeaderCell>
              <StyledHeaderCell>Type</StyledHeaderCell>
              <StyledHeaderCell>Per payment</StyledHeaderCell>
              <StyledHeaderCell>Total financed</StyledHeaderCell>
              <StyledHeaderCell>Total available</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StatusCell>
                  <StatusText status={row.status}>{row.status}</StatusText>
                </StatusCell>
                <StyledTableCell>{row.type}</StyledTableCell>
                <StyledTableCell>{row.payment}</StyledTableCell>
                <StyledTableCell>{row.totalFinanced}</StyledTableCell>
                <StyledTableCell>{row.totalAvailable}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};

export default ContractsTable;
