"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { HEADER_ITEMS } from "@Constants/headerItems";
import Image from "next/image";
import DropdownMenu from "@Components/DropdownMenu";
import Icon from "@Components/Icon";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const renderNavigation = () => {
    return HEADER_ITEMS?.map((item, index) => (
      <div className={styles.navBox} key={index} ref={navRef}>
        <div className={styles.icon} onClick={() => setActive(!active)}>
          <Icon name={item.iconName} />
        </div>
        {active && <DropdownMenu data={item.data} />}
      </div>
    ));
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={"/images/logo.png"} alt="logo" width={230} height={60} />
          </Link>
        </div>
        {renderNavigation()}
      </div>
    </header>
  );
}
