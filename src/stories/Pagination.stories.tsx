import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import Pagination from "../components/Pagination/Pagination";

export default {
  title: "Pagination",
  component: Pagination,
} as unknown as ComponentMeta<typeof Pagination>;
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const pagination = Template.bind({});
pagination.args = {
  total: 50,
  pageSize: 5,
};
