"use client";
import React from "react";
import styles from "./DropdownMenu.module.scss";
import Icon from "@Components/Icon";
import Link from "next/link";
import Cookies from "js-cookie";

export default function DropdownMenu({ data }) {
  const handleClick = (item) => {
    if (item?.logout) {
      Cookies.remove("accessToken");
      Cookies.remove("email");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      return null;
    }
  };

  return (
    <div className={styles.dropdown_box}>
      <ul>
        {data?.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item?.logout ? (
              <div className={styles.itemStyle}>
                <Icon name={item.icon} color="black"/>
                <span>{item.title}</span>
              </div>
            ) : (
              <Link href={item.path}>
                <Icon name={item.icon} color="black"/>
                <span>{item.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
