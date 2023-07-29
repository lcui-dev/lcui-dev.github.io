import clsx from "clsx";
import React, { useState } from "react";

export default function Radio({
  checked = false,
  disabled = false,
  children,
  onChecked,
}: {
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onChecked?: () => void;
}) {
  return (
    <div
      className={clsx(
        "radio",
        checked && "checked",
        disabled && "disabled"
      )}
      onClick={() => {
        if (!disabled) {
          onChecked();
        }
      }}
    >
      <div className="radio-inner">
        <div className="radio-inner-icon"></div>
      </div>
      <span className="radio-text">{children}</span>
    </div>
  );
}
