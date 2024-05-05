"use client";
import MonoLayout from "@Layouts/MonoLayout";
import React from "react";
import styles from "./Homepage.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import ImageCard from "@Modules/ImageCard";

export default function Homepage() {
  const data = [
    {
      id: 1,
      image: "birthdayCake",
    },
    {
      id: 2,
      image: "cake1",
    },
    {
      id: 3,
      image: "cake2",
    },
    {
      id: 4,
      image: "cake3",
    },
  ];

  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className={styles.container}>
      <MonoLayout>
        <div className={styles.createAIForm}>
          <TextField
            title={"Create AI Birthday Cake"}
            placeholder={"Text"}
            description={
              "Generate an image using Generative AI by describing what you want to see, all images are published publicly by default."
            }
          />
          <Button text={"Create"} color={"primary"} />
          <div className={styles.generated}>
            <ImageCard data={data} onClick={handleClick} />
          </div>
        </div>
      </MonoLayout>
    </div>
  );
}
