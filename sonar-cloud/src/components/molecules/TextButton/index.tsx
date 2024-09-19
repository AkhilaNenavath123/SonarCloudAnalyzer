import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

interface CardContentMoleculeProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContentWrapper = styled.div`
  padding: 20px;
  background-color: #222322;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  height: 200px;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
const CardHeader = styled(Typography)`
  color: white;
`;
const CardDes = styled(Typography)`
  color: white;
`;
const CardContentMolecule: React.FC<CardContentMoleculeProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <ContentWrapper>
      <CardHeader variant="h5">{title}</CardHeader>
      <CardDes variant="body2">{description}</CardDes>
      <ButtonWrapper>
        <Button variant="contained">{buttonText}</Button>
      </ButtonWrapper>
    </ContentWrapper>
  );
};

export default CardContentMolecule;
