import React from "react";
import styled from "styled-components";
import CardContentMolecule from "../../molecules/TextButton";
import { Box } from "@mui/material";

const CenterWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #928d8d;
`;

const CardContain: React.FC = () => {
  return (
    <CenterWrapper data-testid="center-wrapper">
      <CardContentMolecule
        title="Launch a new Cash Kick"
        description="You have upto $0 available for a new cash advance"
        buttonText="New Cash Kick"
      />
    </CenterWrapper>
  );
};

export default CardContain;
