import React from "react";
import styled from "styled-components";
import { Box, Typography, Card } from "@mui/material";

const PageContainer = styled(Box)`
  background-color: #121212;
  min-height: 92vh;
  padding: 24px;
`;

const ContentCard = styled(Card)`
  background-color: #2d2b2b;
  border-radius: 10px;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding: 8px;
  font-family: Gilroy, sans-serif;
  max-height: 10px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  margin-right: 8px;
  font-family: Gilroy, sans-serif;
`;

const TableWrapper = styled(Box)`
  margin-top: 16px;
`;

const TableContainer = styled(Box)`
  height: 200px;
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 8px;
  flex-grow: 1;
  background-color: #201f24;

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #2d2b2b;
  }

  tbody {
    background-color: #2d2b2b;
  }
`;

interface CashAccelerationTemplateProps {
  title: string;
  infoIcon: React.ReactNode;
  tabGroup: React.ReactNode;
  tableContent: React.ReactNode;
}

const CashAccelerationTemplate: React.FC<CashAccelerationTemplateProps> = ({
  title,
  infoIcon,
  tabGroup,
  tableContent,
}) => {
  return (
    <PageContainer>
      <ContentCard>
        <HeaderContainer>
          <Title variant="h5">{title}</Title>
          {infoIcon}
        </HeaderContainer>

        {tabGroup}

        <TableWrapper>
          <TableContainer>{tableContent}</TableContainer>
        </TableWrapper>
      </ContentCard>
    </PageContainer>
  );
};

export default CashAccelerationTemplate;
