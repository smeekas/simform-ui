import React, {
  HTMLProps,
  ButtonHTMLAttributes,
  HTMLAttributes,
  Children,
} from "react";
import "./Button.scss";
import classNames from "classnames";
import LoadingIcon from "./LoadingIcon";
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "default" | "danger" | "dashed";
  ghost?: boolean;
  size?: "small" | "medium" | "large";
  block?: boolean;
  shape?: "default" | "circle" | "round";
  children?: React.ReactNode | string;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  (props, ref) => {
    const {
      disabled,
      ghost,
      size,
      varient,
      loading,
      block,
      children,
      shape,
      onClick,
      ...rest
    } = props;
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
    const clickhandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (!loading && onClick) {
        onClick(e);
      }
    };
    return (
      <button
        onClick={clickhandler}
        disabled={disabled}
        className={`zen-button ${classnames}`}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref}
      >
        {loading && <LoadingIcon />}
        {children && children}
      </button>
    );
  }
);

export default Button;
