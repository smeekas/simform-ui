

import React from "react";
import AvatarGroup from "../components/AvatarGroup/AvatarGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from '../components/Avatar/Avatar'
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
    children: [
        <Avatar color="red" size="default" source="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />,
        <Avatar color="blue" size="default" alt="B" />
        ,
        <Avatar color="green" size="default" alt="C" />
        ,
        <Avatar color="purple" size="default" alt="D" />, < Avatar color="red" size="default" source="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />,
        <Avatar color="blue" size="default" alt="B" />
        ,
        <Avatar color="green" size="default" alt="C" />
        ,
        <Avatar color="purple" size="default" alt="D" />, <Avatar color="red" size="default" source="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />,
        <Avatar color="blue" size="default" alt="B" />
        ,
        <Avatar color="green" size="default" alt="C" />
        ,
        <Avatar color="purple" size="default" alt="D" />, <Avatar color="red" size="default" source="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />,
        <Avatar color="blue" size="default" alt="B" />
        ,
        <Avatar color="green" size="default" alt="C" />
        ,
        <Avatar color="purple" size="default" alt="D" />

    ]
};