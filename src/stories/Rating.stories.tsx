import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import Rating from "../components/Rating/Rating";

export default {
  title: "Rating",
  component: Rating,
  decorators: [
    (Story: Story) => (
      <div style={{ display:"flex",justifyContent:"center",marginTop:"10rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    parameters: {
      actions: {
        handles: ["change", "click"],
      },
    },
    allowClear: {
      description: "double click to clear to selection.",
    },
    count: {
      description: "total number of star/character.",
      defaultValue: 5,
    },
    fontSize: {
      description: "font size applied only if character is provided.",
    },
    character: {
      description: "string or svg icon.",
    },
    value: {
      description: "total number of filled nodes.",
    },
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
