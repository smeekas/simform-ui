import React from "react";
import Avatar from "../components/Avatar/Avatar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    // source:  
  }
} as unknown as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Avatar_with_Image = Template.bind({});
Avatar_with_Image.args = {
  source:
    "https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  shape: "circle",
  size: "default",
};

export const Avatar_without_Image = Template.bind({});
Avatar_without_Image.args = {
  shape: "circle",
  size: "default",
};

export const Square_Avatar = Template.bind({});
Square_Avatar.args = {
  source:
    "https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  shape: "square",
  size: "default",
};
export const Avatar_With_Only_Alt = Template.bind({});
Avatar_With_Only_Alt.args = {
  shape: "circle",
  size: "default",
  alt: "John Doe",
  color:'#bdbdbd'
};

