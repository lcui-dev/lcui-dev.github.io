import clsx from "clsx";
import React from "react";
import CoreWindow, { WindowProps } from "../Window";
import styles from "./Window.module.css";

export default function Window({ className, ...props }: WindowProps) {
  return (
    <CoreWindow
      icon={
        <img
          width={20}
          height={20}
          className={styles.icon}
          src="/img/logo.png"
          alt="logo"
        />
      }
      className={clsx(styles.window, className)}
      {...props}
    />
  );
}
