import React, { useState } from "react";
import "./Toggle.scss";
import classNames from "classnames";

interface ToggleProps {
  disabled?: boolean;
  checked?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: (
    checked?: boolean,
    event?: React.MouseEvent<HTMLInputElement>
  ) => void;
  onChange?: (
    checked?: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  ref?: React.RefObject<HTMLInputElement>;
}
const Toggle = (props: ToggleProps) => {
  const { disabled, checked, size = "medium", onClick, onChange, ref } = props;
  const [isChecked, setIsChecked] = useState(!!checked);
  const classnamesLabel = classNames({
    [`zen-toggle-${size}`]: size,
  });
  const classnamesSpan = classNames({
    [`zen-toggle-disabled `]: disabled,
    [`zen-toggle-hover`]: !disabled,
  });
  const clickHandler: React.MouseEventHandler<HTMLInputElement> = (e) => {
    // console.log(e.currentTarget.checked);
    if (onClick && !disabled) {
      onClick(isChecked, e);
    }
  };
  // console.log(isChecked);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // console.log(e.currentTarget.checked);
    if (!disabled && !checked) {
      if (onChange) {
        onChange(!isChecked, e);
      }
      setIsChecked(e.currentTarget.checked);
    }
  };
  return (
    <label className={`zen-toggle ${classnamesLabel}`}>
      <input
        onClick={(e) => clickHandler(e)}
        type="checkbox"
        onChange={(e) => changeHandler(e)}
        checked={isChecked}
        disabled={disabled}
        ref={ref}
      />
      <span className={`zen-toggle-control ${classnamesSpan}`}></span>
    </label>
  );
};

export default Toggle;
