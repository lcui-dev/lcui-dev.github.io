import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

export default function ExampleEditor({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={clsx(className, styles.editor)} {...props} />;
}
