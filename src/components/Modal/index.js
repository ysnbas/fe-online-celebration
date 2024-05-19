import React from "react";
import styles from "./Modal.module.scss";

import Image from "next/image";
import Button from "@Components/Button";
import { createPortal } from "react-dom";

const Modal = ({ onClose, visible, content }) => {
  const modalContent = visible && (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalWrapper}>
          <div className={styles.closeBTNBox}>
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
          </div>
          {content.imageUrl && (
            <Image
              src={content.imageUrl}
              alt="Modal Content"
              className={styles.image}
            />
          )}
          {content.title && (
            <h2 className={styles.modalTitle}>{content.title}</h2>
          )}
          {content.description && (
            <p className={styles.modalDescription}>{content.description}</p>
          )}
          {content.buttons &&
            content.buttons.map((button, index) => (
              <Button
                onButtonClick={button.onClick}
                key={index}
                color="primary"
                text={button.text}
                type="submit"
              />
            ))}
        </div>
      </div>
    </div>
  );

  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.getElementById("modal-root"));
  }
};

export default Modal;
