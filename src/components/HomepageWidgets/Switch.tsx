import classNames from "classnames";
import React, { useState } from "react";

export default function Switch({
  checked: defaultChecked = false,
  disabled = false,
  checkedIcon,
  uncheckedIcon,
  checkedText,
  uncheckedText,
  children,
}: {
  checkedIcon?: string;
  checkedText?: string;
  uncheckedIcon?: string;
  uncheckedText?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div
      className={classNames(
        "switch",
        checked && "checked",
        disabled && "disabled"
      )}
      onClick={() => {
        if (!disabled) {
          setChecked(!checked);
        }
      }}
    >
      <div className="switch-inner">
        <div className="switch-inner-bar">
          <div
            className={classNames(
              "switch-inner-on-block",
              checkedIcon && `icon icon-${checkedIcon}`
            )}
          >
            {checkedText}
          </div>
          <div className="switch-inner-slider"></div>
          <div
            className={classNames(
              "switch-inner-off-block",
              uncheckedIcon && `icon icon-${uncheckedIcon}`
            )}
          >
            {uncheckedText}
          </div>
        </div>
      </div>
      <span className="switch-text">{children}</span>
    </div>
  );
}
