import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./index";
import { ButtonProps } from "@mui/material";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["text", "contained", "outlined"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "outlined",
  color: "secondary",
  children: "Secondary Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  color: "primary",
  disabled: true,
  children: "Disabled Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  color: "primary",
  size: "small",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  color: "primary",
  size: "large",
  children: "Large Button",
};
