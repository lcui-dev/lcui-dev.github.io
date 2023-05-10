import classNames from "classnames";
import React, { useState } from "react";

export default function Checkbox({
  checked: defaultChecked = false,
  disabled = false,
  children,
}: {
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div
      className={classNames(
        "checkbox",
        checked && "checked",
        disabled && "disabled"
      )}
      onClick={() => {
        if (!disabled) {
          setChecked(!checked);
        }
      }}
    >
      <div className="checkbox-inner">
        <div className="checkbox-inner-icon icon icon-check"></div>
      </div>
      <span className="checkbox-text">{children}</span>
    </div>
  );
}
