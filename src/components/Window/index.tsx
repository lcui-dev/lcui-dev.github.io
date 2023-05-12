import classNames from "classnames";
import React from "react";
import styles from "./index.module.css";

export default function Window({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) {
  return <div className={classNames(className, styles.window, 'shadow--md')}>
    <div className={styles['window-header']}>{title}</div>
    <div className={styles['window-content']}>{children}</div>
  </div>;
}
