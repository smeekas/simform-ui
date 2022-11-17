import React,{CSSProperties} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "../components/Stack/Stack";
import Button from "../components/Button/Button";
export default {
  title: "Stack",
  component: Stack,
  argTypes:{
    direction:{
        control:"select",
        options:["row","column"]
    }
  }
} as unknown as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

const defaultProps = {
  children: [
    <Button>Item</Button>,
    <Button>Item</Button>,
    <Button>Item</Button>,
    <Button>Item</Button>,
  ],
};

export const Row = Template.bind({});
Row.args = {
  direction: "row",
  ...defaultProps
};
