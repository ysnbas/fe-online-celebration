import React from "react";
import styles from "./Dashboard.module.scss";

/* Components */
import Header from "@Components/Header";
import Footer from "@Components/Footer";

export default function Dashboard({ children }) {
  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.topContainer}>
        <Header />
      </div>
      <div className={styles.childContainer}>{children}</div>
      <div className={styles.bottomContainer}>
        <Footer />
      </div>
    </section>
  );
}
