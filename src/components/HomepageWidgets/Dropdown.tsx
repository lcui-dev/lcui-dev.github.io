import clsx from "clsx";
import React, { useEffect, useState } from "react";

function Dropdown({
  open: inputOpen,
  children,
  trigger,
}: {
  open?: boolean;
  children?: React.ReactNode;
  trigger: React.ReactElement;
}) {
  const [open, setOpen] = useState(inputOpen);

  useEffect(() => {
    if (typeof inputOpen === "boolean") {
      setOpen(inputOpen);
    }
  }, [inputOpen]);
  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        ...trigger.props,
        onClick() {
          setOpen(!open);
        },
      })}
      <div className={clsx("dropdown-menu", open && "show")}>
        {children}
      </div>
    </div>
  );
}

function DropdownItem({
  className,
  disabled,
  ...props
}: { disabled?: boolean } & React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={clsx("dropdown-item", className, disabled && "disabled")}
    />
  );
}

function DropdownDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div {...props} className={clsx("dropdown-divider", className)} />
  );
}

function DropdownHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div {...props} className={clsx("dropdown-header", className)} />
  );
}

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;

export default Dropdown;
