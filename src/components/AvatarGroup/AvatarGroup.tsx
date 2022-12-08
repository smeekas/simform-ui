import React, { ReactNode } from 'react'
interface AvatarGroupPropsType {
    children: ReactNode[],
    max?: number,

}
function AvatarGroup(props: AvatarGroupPropsType) {
    const { children: unfilteredChildren, max = 3 } = props;
    const children = React.Children.toArray(unfilteredChildren).filter(child => {
        return React.isValidElement(child)
    })
    const childrenCount = children.length;
    const maxCount = childrenCount < max ? 0 : childrenCount - max;
    return (
        <div>AvatarGroup</div>
    )
}

export default AvatarGroup