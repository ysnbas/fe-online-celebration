"use client";
import React, { useState } from "react";
import MonoLayout from "@Layouts/MonoLayout";
import styles from "./Homepage.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
// import ImageCard from "@Modules/ImageCard";
import { postGeneratedData } from "services/openai";
import Image from "next/image";
import cx from "classnames";
import { TABS } from "@Constants/tabs";
// import { GENERATED_IMAGE } from "@Constants/generatedImages";
import Loading from "@Components/Loading";
import Icon from "@Components/Icon";
import { useSelector } from "react-redux";
import Prompt from "@Components/Prompt";

export default function Homepage() {
  const [generatedImage, setGeneratedImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [giftName, setGiftName] = useState("");
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const userData = useSelector((state) => state.user.userData);

  const handleClick = (item) => {
    console.log(item);
  };

  const handleCreateImage = () => {
    setLoading(true);
    setGeneratedImage("");
    const changeNamePrompt = prompt.replace("Jane", giftName);
    if (prompt) {
      postGeneratedData({
        prompt: changeNamePrompt,
        user_id: userData?._id,
      })
        .then((res) => {
          if (res?.success) {
            setTimeout(() => {
              setGeneratedImage(res.data);
              setLoading(false);
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleTextChange = (e) => {
    setGiftName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <MonoLayout>
        <div className={styles.createAIForm}>
          <form>
            <div className={styles.nameInput}>
              <textarea
                className={styles.textarea}
                value={prompt}
                placeholder="Create AI Birthday Cake"
                disabled
              />
              <TextField
                placeholder={"Name"}
                onTextFieldChange={handleTextChange}
              />
            </div>
            <span className={styles.description}>
              Enter a name of your choice instead of &apos;Jane&apos; in the
              text.
            </span>
            <Button
              text={"Create"}
              color={"primary"}
              onButtonClick={() => handleCreateImage()}
              type={"button"}
              disabled={!(prompt && giftName) || loading}
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
          {/* <div className={styles.allGenerated}>
            <ImageCard data={GENERATED_IMAGE} onClick={handleClick} />
          </div> */}
          <Prompt category={activeTab} setPrompt={setPrompt} />
        </div>
      </MonoLayout>
    </div>
  );
}
