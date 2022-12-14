import React, { Children, forwardRef } from "react";
import "./Divider.scss";
import className from "classnames";
interface DividerProps {
  varient?: "plain" | "dashed";
  orientation?: "left" | "right" | "center";
  children?: string;
  type?: "horizontal" | "vertical";
  orientationMargin?: boolean;
  orientationMarginValue?: number;
}

const Divider = React.forwardRef<HTMLParagraphElement, DividerProps>(
  (props, ref) => {
    const {
      children,
      varient,
      orientation = "center",
      type,
      orientationMargin,
      orientationMarginValue,
    } = props;
    const classnames = className({
      [`zen-divider-${orientation}`]: orientation,
      [`zen-divider-with-text`]: orientation,
      [`zen-divider-${varient}`]: varient,
      [`zen-divider-${type}`]: type,
      [`zen-divider-margin-${orientation}`]:
        orientationMargin && orientation !== "center",
    });
    return (
      <div className={`${classnames}`}>
        {children && type !== "vertical" && (
          <span
            style={{
              marginLeft:
                orientation === "left" && orientationMargin
                  ? orientationMarginValue
                  : 0,
              marginRight:
                orientation === "right" && orientationMargin
                  ? orientationMarginValue
                  : 0,
            }}
            className="zen-divider-text"
          >
            {children}
          </span>
        )}
      </div>
    );
  }
);
export default Divider;
