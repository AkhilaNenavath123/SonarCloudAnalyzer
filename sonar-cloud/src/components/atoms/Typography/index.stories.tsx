import React from "react";
import Typography from "./index";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta = {
  title: "Atoms/Typography",
  component: Typography,
};

export default meta;

const Template: StoryFn = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
  children: "This is the default Typography component.",
};

export const Headline = Template.bind({});
Headline.args = {
  variant: "h1",
  children: "This is a Headline (H1)",
};

// Story for displaying a subtitle
export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "h2", // MUI typography variant
  children: "This is a Subtitle (H2)", // Example text
};

// Story for displaying text with custom color
export const CustomColor = Template.bind({});
CustomColor.args = {
  variant: "body1",
  children: "This text is red.",
  sx: { color: "red" }, // Custom style using sx prop
};
