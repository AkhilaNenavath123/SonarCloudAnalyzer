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

const StatusCell = styled(TableCell)({
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});

const StatusText = styled("span")<{ status: string }>(({ status }) => ({
  backgroundColor:
    status === "Pending" ? "rgba(132, 135, 135, 0.2)" : "transparent",
  borderRadius: status === "Pending" ? "4px" : "0",
  padding: status === "Pending" ? "2px 4px" : "0",
}));

const TotalReceivedCell = styled(StyledTableCell)({
  "& .amount": {
    display: "block",
    fontSize: "14px",
  },
  "& .fee": {
    display: "block",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
  },
});
const rows = [
  {
    id: 1,
    name: "My first advance",
    status: "Pending",
    maturity: "Apr 03, 2022",
    totalReceived: { amount: "$150,000.00", fee: "12% fee" },
    totalFinanced: "$170,454.55",
  },
  {
    id: 2,
    name: "My second advance",
    status: "Pending",
    maturity: "Apr 03, 2023",
    totalReceived: { amount: "$150,600.00", fee: "12% fee" },
    totalFinanced: "$170,654.55",
  },
  {
    id: 3,
    name: "My third advance",
    status: "Completed",
    maturity: "Apr 03, 2024",
    totalReceived: { amount: "$150,080.00", fee: "12% fee" },
    totalFinanced: "$170,494.55",
  },
  {
    id: 4,
    name: "My fourth advance",
    status: "Pending",
    maturity: "Apr 03, 2020",
    totalReceived: { amount: "$150,009.00", fee: "12% fee" },
    totalFinanced: "$170,459.55",
  },
  {
    id: 5,
    name: "My fifth advance",
    status: "Completed",
    maturity: "Apr 03, 2022",
    totalReceived: { amount: "$150,000.00", fee: "12% fee" },
    totalFinanced: "$170,454.55",
  },
  {
    id: 6,
    name: "My sixth advance",
    status: "Pending",
    maturity: "Apr 03, 2022",
    totalReceived: { amount: "$150,000.00", fee: "12% fee" },
    totalFinanced: "$170,454.55",
  },
];

const CashKicksTable = () => {
  return (
    <Paper>
      <StyledTableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="contracts table">
          <TableHead>
            <TableRow>
              <StyledHeaderCell>Name</StyledHeaderCell>
              <StyledHeaderCell>Status</StyledHeaderCell>
              <StyledHeaderCell>Maturity</StyledHeaderCell>
              <StyledHeaderCell>Total received</StyledHeaderCell>
              <StyledHeaderCell>Total financed</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StatusCell>
                  <StatusText status={row.status}>{row.status}</StatusText>
                </StatusCell>
                <StyledTableCell>{row.maturity}</StyledTableCell>
                <TotalReceivedCell>
                  <span className="amount">{row.totalReceived.amount}</span>
                  <span className="fee">{row.totalReceived.fee}</span>
                </TotalReceivedCell>
                <StyledTableCell>{row.totalFinanced}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};

export default CashKicksTable;
