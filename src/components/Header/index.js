import React from "react";
import styles from "./Header.module.scss";
import { HEADER_ITEMS } from "@Constants/headerItems";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>Online Kutlama</div>
        <div className={styles.menu}>
          {HEADER_ITEMS?.map((items, index) => {
            return (
              <div key={index} className={styles.headerItem}>
                {items.title}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
