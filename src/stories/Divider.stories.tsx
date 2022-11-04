import React from "react";
import Divider from "../components/Divider/Divider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// export default {
//     title: 'Divider',
//     component: Divider
// }

// export const Plain = () => <Divider></Divider>
// export const Dashed = () => <Divider varient='dashed'></Divider>
// export const Left = () => <Divider orientation='left'>Hello</Divider>
// export const Center = () => <Divider orientation='center'>Hello</Divider>
// export const Right = () => <Divider orientation='right'>Hello</Divider>
// export const Horizontal = () => <Divider type='horizontal'>Hello</Divider>
// export const Vertical = () => <Divider type='vertical'>Hello</Divider>
// export const OrientationMarginLeft = () => <Divider orientation='left' orientationMargin={5}>Hello</Divider>
// export const OrientationMarginRight = () => <Divider orientation='right' orientationMargin={5}>Hello</Divider>

export default {
  title: "Divider",
  component: Divider,
} as unknown as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

const defaultProps = {
  children: "divider",
};
export const Center = Template.bind({});
Center.args = {
  orientation: "center",
  ...defaultProps,
};
export const Left = Template.bind({});
Left.args = {
  orientation: "left",
  ...defaultProps,
};
export const Right = Template.bind({});
Right.args = {
  orientation: "right",
  ...defaultProps,
};
