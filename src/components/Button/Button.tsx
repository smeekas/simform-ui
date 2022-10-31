import React, { HTMLProps, ButtonHTMLAttributes, HTMLAttributes } from "react";
import "./Button.scss";
import classNames from "classnames";
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary"|"default";
  ghost?:boolean
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  (props, ref) => {
    const { disabled,ghost, varient, ...rest } = props;
    console.log(ref);
    const classnames = classNames({
      [`zen-${varient}`]: varient!=="default",
      [`zen-disabled`]: disabled,
      [`zen-ghost`]: ghost,
    });
    console.log(classnames);
    return (
      <button
        disabled={disabled}
        className={`zen-button ${classnames}`}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref}
      >
        Default Button
      </button>
    );
  }
);

export default Button;
