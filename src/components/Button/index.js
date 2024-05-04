import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  text,
  type,
  color,
  size,
  fullWidth,
  onButtonClick,
  disabled,
  customStyle,
  ...props
}) => {
  return (
    <button
      onClick={(e) => {
        if (onButtonClick) onButtonClick(e);
      }}
      type={type || "submit"}
      className={cx(
        styles.button,
        color && styles[color],
        size && styles[`size_${size}`],
        fullWidth && styles.full,
        `${customStyle}`
      )}
      disabled={disabled}
      {...props}
    >
      {text && <span>{text}</span>}
    </button>
  );
};
export default Button;
