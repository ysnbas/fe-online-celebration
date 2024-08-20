"use client";
import MonoLayout from "@Layouts/MonoLayout";
import styles from "./Generated.module.scss";
import ImageCard from "@Modules/ImageCard";
import { useEffect, useState } from "react";
import { getGeneratedData } from "services/generated";
import Image from "next/image";

export default function Generated() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGeneratedData()
      .then((res) => {
        if (res?.success) {
          setImages(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <MonoLayout>
        <h1>Generated</h1>
        {images.length > 0 ? (
          <div className={styles.generatedImage}>
            {images?.map((image) => (
              <Image
                key={image._id}
                src={
                  !image.expired
                    ? image.generated_image_link
                    : "/generatedAI/cake1.jpeg"
                }
                alt="generated"
                width={150}
                height={150}
                className={image.expired ? styles.expired : ""}
              />
            ))}
          </div>
        ) : (
          "No generated images found"
        )}
      </MonoLayout>
    </div>
  );
}
