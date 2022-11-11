import React from "react";
import Toggle from "../components/Toggle/Toggle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Toggle",
  component: Toggle,
} as unknown as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;


export const Small = Template.bind({});
Small.args = {
  size: "small",

};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",

};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
