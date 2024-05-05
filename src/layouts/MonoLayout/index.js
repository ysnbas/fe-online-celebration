import React from "react";
import styles from "./MonoLayout.module.scss";

export default function MonoLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
