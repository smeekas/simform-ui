

import React from "react";
import AvatarGroup from "../components/AvatarGroup/AvatarGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "AvatarGroup",
    component: AvatarGroup,
    argTypes: {
        // source:  
    }
} as unknown as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => <AvatarGroup {...args} />;

export const Avatar_with_Image = Template.bind({});
Avatar_with_Image.args = {

};