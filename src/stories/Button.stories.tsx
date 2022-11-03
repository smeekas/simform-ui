import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    children: "button",
  },
} as unknown as ComponentMeta<typeof Button>;

const defaultProps = {
  children: "button",
};
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  varient: "primary",
  ...defaultProps,
};

export const Danger = Template.bind({});
Danger.args = {
  varient: "danger",
  ...defaultProps,
};

export const Dashed = Template.bind({});
Dashed.args = {
  varient: "dashed",
  ...defaultProps,
};
