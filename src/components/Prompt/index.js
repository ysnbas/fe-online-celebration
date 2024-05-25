import React, { useEffect, useRef, useState } from "react";
import styles from "./Prompt.module.scss";
import { getPrompts } from "services/prompt";

export default function Prompt({ category, setPrompt }) {
  const [data, setData] = useState([]);
  const prevCategoryRef = useRef();

  const lowerCaseCategory = category?.toLowerCase();

  useEffect(() => {
    if (prevCategoryRef.current === lowerCaseCategory) return;
    getPrompts({ name: lowerCaseCategory })
      .then((res) => {
        if (res.success) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    prevCategoryRef.current = lowerCaseCategory;
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
