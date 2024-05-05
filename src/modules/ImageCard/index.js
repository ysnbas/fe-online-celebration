import Image from "next/image";
import React from "react";
import styles from "./ImageCard.module.scss";

export default function ImageCard({ data, onClick }) {
  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <div className={styles.image} key={item.id} onClick={() => onClick(item)}>
          <Image
            src={`/generatedAI/${item.image}.jpeg`}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}
