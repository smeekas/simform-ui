import React, { ReactNode } from 'react'
import Avatar from '../Avatar/Avatar';
import './AvatarGroup.scss'
export interface AvatarGroupPropsType {
    children?: ReactNode[],
    max?: number,
    spacing?: "medium" | "small"

}
const AvatarGroup = (props: AvatarGroupPropsType) => {
    const { children: unfilteredChildren, max = 3, spacing = "small" } = props;
    const children = React.Children.toArray(unfilteredChildren).filter(child => {
        return React.isValidElement(child)
    }) as JSX.Element[]
    const childrenCount = children.length;
    const spacingOfAvatar = {
        "medium": -10,
        "small": -20,

    }
    const { size } = children[0].props
    // console.log(style);
    const maxCount = childrenCount < max ? childrenCount : max;
    const extraAvatar = childrenCount - max;
    return (
        <div className='zen-avatargroup'>
            {children.slice(0, maxCount).map((child, index) => {
                return React.cloneElement(child, {
                    ...child.props,
                    key: index,
                    style: {
                        posiion: "relative",
                        display: "inline-flex",
                        border: "2px solid #fff",
                        // overflow:"hidden",
                        marginLeft: `${index !== 0 ? (spacingOfAvatar[spacing]) : 0}px`
                    }
                })
            })}
            <Avatar size={"default"}
                name={`+${extraAvatar}`}
                style={
                    {
                        position: "relative",
                        display: "inline-flex",
                        border: "2px solid #fff",
                        marginLeft: `${spacingOfAvatar[spacing]}px`
                    }} />
        </div>
    )
}

export default AvatarGroup