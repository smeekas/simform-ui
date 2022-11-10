import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Rating from "../components/Rating/Rating";

export default {
  title: "Rating",
  component: Rating,

  argTypes: {
    children: "button",
  },
} as unknown as ComponentMeta<typeof Rating>;

// const defaultProps = {

// };
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Star = Template.bind({});
Star.args = {};

export const Character = Template.bind({});
Character.args = {
  character: "A",
};

