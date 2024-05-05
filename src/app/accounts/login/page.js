"use client";
import React from "react";
import styles from "./Login.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/homepage");
  };

  const renderCreateAccount = () => {
    return (
      <div className={styles.createAccountContainer}>
        <p className={styles.accountLink}>Burada Yeni Misin?</p>
        <Link href={"/accounts/register"}>
          <span>Create Account</span>
        </Link>
      </div>
    );
  };
  const renderUserForm = () => {
    return (
      <div className={styles.userFormContainer}>
        <form className={styles.formControl}>
          <h1>Login</h1>
          <p>This is the login page</p>
          {renderCreateAccount()}
          <div className={styles.strike}>
            <span>form</span>
          </div>
          <TextField
            title="Username"
            placeholder="Enter your username"
            type="text"
            containerStyle={styles.mb_16}
          />
          <TextField
            title="Password"
            placeholder="Enter your password"
            type="password"
            isPassword
            containerStyle={styles.mb_16}
          />
          <Button
            color="primary"
            text={"Login"}
            type={"button"}
            onButtonClick={() => handleLogin()}
          />
        </form>
      </div>
    );
  };

  return <div>{renderUserForm()}</div>;
}
