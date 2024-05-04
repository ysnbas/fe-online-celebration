"use client";
import React from "react";
import styles from "./Register.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Link from "next/link";

export default function Register() {
  const renderCreateAccount = () => {
    return (
      <div className={styles.createAccountContainer}>
        <p className={styles.accountLink}>Zaten Bir Hesabın Var Mı?</p>
        <Link href={"/accounts/login"}>
          <span>Log In</span>
        </Link>
      </div>
    );
  };
  const renderUserForm = () => {
    return (
      <div className={styles.userFormContainer}>
        <form className={styles.formControl}>
          <h1>Register</h1>
          <p>This is the register page</p>
          {renderCreateAccount()}
          <div className={styles.strike}>
            <span>form</span>
          </div>
          <TextField
            title="Full Name"
            placeholder="Enter your full name"
            type="text"
            containerStyle={styles.mb_16}
          />
          <TextField
            title="Username"
            placeholder="Enter your username"
            type="text"
            containerStyle={styles.mb_16}
          />
          <TextField
            title="Email"
            placeholder="Enter your mail"
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
            text={"Create Account"}
            onButtonClick={() => console.log("first")}
          />
        </form>
      </div>
    );
  };

  return <div>{renderUserForm()}</div>;
}
