import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

export default Button;
