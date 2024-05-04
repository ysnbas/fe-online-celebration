import React from "react";
import styles from "./SplitLayout.module.scss";
import cx from "classnames";

export default function SplitLayout({
  leftContent,
  rightContent,
  gap = 0,
  rightChangeColor,
  maxWidth,
}) {
  return (
    <div className={cx(styles.container, maxWidth && styles.maxWidth)}>
      <div className={styles.grid} style={{ gap: gap }}>
        <div className={styles.col}>{leftContent}</div>
        <div
          className={cx(
            styles.col,
            rightChangeColor && styles.rightChangeColor
          )}
        >
          {rightContent}
        </div>
      </div>
    </div>
  );
}
