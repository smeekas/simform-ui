import React, {
  HTMLProps,
  ButtonHTMLAttributes,
  HTMLAttributes,
  Children,
} from "react";
import "./Button.scss";
import classNames from "classnames";
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "default" | "danger" | "dashed";
  ghost?: boolean;
  size?: "small" | "medium" | "large";
  block?: boolean;
  shape?: "default" | "circle" | "round";
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  (props, ref) => {
    const { disabled, ghost, size, varient, block, children, shape, ...rest } =
      props;
    console.log(ref);
    const classnames = classNames({
      [`zen-${varient}`]: varient !== "default",
      [`zen-disabled`]: disabled,
      [`zen-ghost`]: ghost,
      [`zen-${size}`]: size !== "medium",
      [`zen-block`]: block,
      [`zen-${shape}`]: shape !== "default",
    });
    console.log(classnames);
    return (
      <button
        disabled={disabled}
        className={`zen-button ${classnames}`}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref}
      >
        {children && children}
      </button>
    );
  }
);

export default Button;
