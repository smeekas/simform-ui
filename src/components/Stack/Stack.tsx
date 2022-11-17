import React, { CSSProperties } from "react";
import "./Stack.scss";
import { StyleInjector } from "../../utils/Styleinjector";

export interface StackProps {
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  children?: JSX.Element[] | JSX.Element;
  justifyContent?: CSSProperties["justifyContent"];
  spacing?: number;
}

const Stack = (props: StackProps) => {
  const {
    direction = "row",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    spacing = 1,
    children,
  } = props;
  const style = direction.includes("row")
    ? {
        marginLeft: `${+(spacing * 8)}px`,
      }
    : {
        marginTop: `${+(spacing * 8)}px`,
      };

  return (
    <div
      className={`zen-stack `}
      style={{
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children && StyleInjector(children, style)}
    </div>
  );
};


export default Stack