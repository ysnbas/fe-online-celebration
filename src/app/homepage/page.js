"use client";
import React, { useEffect, useState } from "react";
import MonoLayout from "@Layouts/MonoLayout";
import styles from "./Homepage.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import ImageCard from "@Modules/ImageCard";
import { postGeneratedData } from "services/openai";
import Image from "next/image";
import cx from "classnames";
import { TABS } from "@Constants/tabs";
import { GENERATED_IMAGE } from "@Constants/generatedImages";
import Loading from "@Components/Loading";
import Icon from "@Components/Icon";

export default function Homepage() {
  const [generatedImage, setGeneratedImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const handleClick = (item) => {
    console.log(item);
  };

  const handleCreateImage = () => {
    setLoading(true);
    setGeneratedImage("");
    if (prompt) {
      postGeneratedData({
        prompt: prompt,
      })
        .then((res) => {
          if (res?.success) {
            setGeneratedImage(res.data);
            setTimeout(() => {
              setLoading(false);
            }, 4000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleTextChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className={styles.container}>
      <MonoLayout>
        <div className={styles.createAIForm}>
          <form>
            <TextField
              title={"Create AI Birthday Cake"}
              placeholder={"Text"}
              onTextFieldChange={handleTextChange}
              description={
                "Generate an image using Generative AI by describing what you want to see, all images are published publicly by default."
              }
            />
            <Button
              text={"Create"}
              color={"primary"}
              onButtonClick={() => handleCreateImage()}
              type={"button"}
              disabled={!prompt || loading}
            />
          </form>
          {loading && (
            <div className={styles.animation}>
              <Loading /> <span>Please Wait...</span>
            </div>
          )}
          {generatedImage && (
            <div className={styles.generated}>
              <div className={styles.icons}>
                <Icon name="download" color={"black"} size={48} />
                <Icon name="share" color={"black"} size={48} />
              </div>
              <Image
                src={generatedImage}
                alt="Generated Image"
                width={500}
                height={500}
              />
            </div>
          )}
          <div className={styles.tabs}>
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={cx(
                  styles.tab,
                  activeTab === tab.title && styles.active
                )}
                onClick={() => setActiveTab(tab.title)}
              >
                <p>{tab.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.allGenerated}>
            <ImageCard data={GENERATED_IMAGE} onClick={handleClick} />
          </div>
        </div>
      </MonoLayout>
    </div>
  );
}
