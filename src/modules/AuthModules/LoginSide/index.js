import Image from "next/image";
import React from "react";
import styles from "./LoginSide.module.scss";

export default function LoginSide() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/birthday-cake-png-5162.png"
        alt="Login Side"
        width={300}
        height={500}
      />
      <div>
        <span>Log In</span>
        <p>Create a Birthday Cake</p>
      </div>
    </div>
  );
}
