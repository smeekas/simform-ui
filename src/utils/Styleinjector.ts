import React from "react";
export const StyleInjector = (
  children: JSX.Element[] | JSX.Element,
  style: React.CSSProperties,
) => {
  return React.Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }
    return React.cloneElement(child, { style: style });
  });
};
