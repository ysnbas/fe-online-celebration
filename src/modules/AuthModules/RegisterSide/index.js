import Image from "next/image";
import React from "react";
import styles from "./RegisterSide.module.scss";

export default function RegisterSide() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/birthday-cake-png-5162.png"
        alt="Login Side"
        width={300}
        height={500}
      />
      <div>
        <span>Register</span>
        <p>Explore a Birthday Cake</p>
      </div>
    </div>
  );
}
