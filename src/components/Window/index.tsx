import clsx from "clsx";
import React from "react";
import { faClose, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import Icon from "@site/src/components/Icon";
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
  return (
    <div className={clsx(className, styles.window, "shadow--md")}>
      <div className={styles["window-header"]}>
        {title}
        <div className={styles["window-buttons"]}>
          <div className={styles["window-button"]}>
            <Icon icon={faMinus} />
          </div>
          <div className={styles["window-button"]}>
            <Icon icon={faSquare} />
          </div>
          <div
            className={clsx(styles["window-button"], styles["window-close"])}
          >
            <Icon icon={faClose} />
          </div>
        </div>
      </div>
      <div className={styles["window-content"]}>{children}</div>
    </div>
  );
}
