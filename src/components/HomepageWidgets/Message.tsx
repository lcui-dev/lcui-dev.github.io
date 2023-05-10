import classNames from "classnames";
import React from "react";

export default function Message({
  children,
  type,
}: {
  type?: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
}) {
  const icon = {
    success: "check-circle",
    info: "information",
    warning: "alert-circle",
    error: "close-circle",
  }[type];
  return (
    <div
      className={classNames(
        "message-notice-wrapper",
        type && `message-notice-${type}`
      )}
    >
      <div className="message-notice">
        {icon && (
          <div
            className={classNames("message-notice-icon icon", `icon-${icon}`)}
          ></div>
        )}
        <div className="message-notice-content">{children}</div>
      </div>
    </div>
  );
}
