import React from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface TabButtonProps extends ButtonBaseProps {
  active: boolean;
}

const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "active",
})<TabButtonProps>(({ active, theme }) => ({
  backgroundColor: active ? "#6C5DD3" : "#262529",
  color: active ? theme.palette.common.white : theme.palette.grey[400],
  border: active ? "2px solid #b6adef" : "1px solid #686565",
  borderRadius: "8px",
  padding: "10px 20px",
  textTransform: "none",
  transition: theme.transitions.create(["background-color", "border-color"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    backgroundColor: active ? "#6C5DD3" : "",
  },
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

export const TabButton: React.FC<TabButtonProps> = ({
  active,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} active={active}>
      {children}
    </StyledButton>
  );
};
