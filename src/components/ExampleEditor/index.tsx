import classNames from "classnames";
import React from "react";
import styles from "./index.module.css";

export default function ExampleEditor({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={classNames(className, styles.editor)} {...props} />;
}
