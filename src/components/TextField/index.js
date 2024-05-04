"use client";
import { useState } from "react";
import PropTypes from "prop-types";

/* Styles */
import styles from "./TextField.module.scss";
import cx from "classnames";

/* Components */
import Icon from "@Components/Icon";

export default function TextField({
  type,
  placeholder,
  handleOnKeyDown,
  value,
  onTextFieldChange,
  errorMessage,
  defaultValue,
  containerStyle,
  isPassword,
  charLimit,
  title,
  description,
  ...props
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    if (onTextFieldChange) onTextFieldChange(e);
  };

  const handlePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div
      className={cx(
        styles.container,
        containerStyle,
        isPassword && styles.passwordContainer
      )}
    >
      {title && <span className={styles.titleStyle}>{title}</span>}
      <input
        type={isShowPassword ? "text" : type}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        className={`${styles.textField} ${errorMessage && styles.errorInput} `}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        maxLength={charLimit}
        {...props}
      />
      {isPassword && (
        <div
          className={styles.rightIconContainer}
          onClick={handlePasswordVisibility}
        >
          <Icon
            name={isShowPassword ? "view-off" : "view-1"}
            size="24px"
            color="#969696"
          />
        </div>
      )}
      {description && (
        <span className={styles.descriptionStyle}>{description}</span>
      )}
      {errorMessage && (
        <span className={styles.errorStyle}>{errorMessage}</span>
      )}
    </div>
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  containerStyle: PropTypes.any,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  placeholder: "",
};
