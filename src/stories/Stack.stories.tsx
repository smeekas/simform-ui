import React, { Children, CSSProperties } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OriginalStack from "../components/Stack/Stack";
import Button from "../components/Button/Button";
import type { StackProps } from "../components/Stack/Stack";
interface StackPropsType extends StackProps {
  number: number;
}
const Stack = (props: StackPropsType) => {
  const { number, ...rest } = props;

  return (
    <OriginalStack {...rest}>
      {Array(number)
        .fill(0)
        .map((i, index) => {
          return <Button>{`item ${index + 1}`}</Button>;
        })}
    </OriginalStack>
  );
};
export default {
  title: "Stack",
  component: Stack,
  argTypes: {
    number: {
      name: "number of children",
      description: "not applicable props",
      control: {
        type: "range",
        max: 10,
        min: 1,
      },
    },
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    alignItems: {
      control: "select",
      options: ["center", "flex-start", "flex-end", "stretch", "baseline"],
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    spacing: {
      control: {
        type: "range",
        max: 10,
        min: 1,
      },
    },
    children: {
      control: false,
      description: "childrens on which you want to apply stack ( here we have button for example )",
    },
  },
} as unknown as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

const defaultProps = {
  number: 3,
  spacing: 1,
};

export const Row = Template.bind({});
Row.args = {
  direction: "row",
  ...defaultProps,
};
