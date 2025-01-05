import React from "react";
import { ComponentProps } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
}
