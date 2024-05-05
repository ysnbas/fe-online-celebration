import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.footer}>
        <span>Copyright © Online Kutlama {date}</span>
      </div>
    </footer>
  );
}
