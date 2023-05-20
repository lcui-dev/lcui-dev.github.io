import { faClose, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

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
    <div className={classNames(className, styles.window, "shadow--md")}>
      <div className={styles["window-header"]}>
        {title}
        <div className={styles["window-buttons"]}>
          <div className={styles["window-button"]}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <div className={styles["window-button"]}>
            <FontAwesomeIcon icon={faSquare} />
          </div>
          <div
            className={clsx(styles["window-button"], styles["window-close"])}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
        </div>
      </div>
      <div className={styles["window-content"]}>{children}</div>
    </div>
  );
}
