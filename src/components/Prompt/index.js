import React, { useEffect, useState } from "react";
import styles from "./Prompt.module.scss";
import { getPrompts } from "services/prompt";

export default function Prompt({ category, setPrompt }) {
  const [data, setData] = useState([]);

  const lowerCaseCategory = category?.toLowerCase();

  useEffect(() => {
    getPrompts({ name: lowerCaseCategory })
      .then((res) => {
        if (res.success) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [lowerCaseCategory]);

  return (
    <div className={styles.container}>
      <span className={styles.result}>{data?.length + " Result"}</span>
      <div className={styles.content}>
        {data?.map((item, index) => (
          <div
            key={index}
            className={styles.prompt}
            onClick={() => {
              setPrompt(item?.prompt);
            }}
          >
            {item.prompt}
          </div>
        ))}
      </div>
    </div>
  );
}
