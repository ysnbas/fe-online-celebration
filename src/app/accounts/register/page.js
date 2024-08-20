"use client";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Link from "next/link";

import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { postRegister } from "services/accounts";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
import Modal from "@Components/Modal";

export default function Register() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleModal = () => {
    const modalContent = {
      title: "Error",
      description: errorMessage,
      buttons: [
        {
          text: "Close",
          onClick: () => setVisible(false),
        },
      ],
    };
    return (
      <Modal
        onClose={() => setVisible(false)}
        visible={visible}
        content={modalContent}
      />
    );
  };

  const handleFormSubmit = (e) => {
    postRegister(e)
      .then((res) => {
        if (res?.success) {
          Cookies.set("accessToken", res.token);
          router.push("/homepage");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message || error.error);
        setVisible(true);
      });
  };

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
        <FormikProvider value={formik}>
          <form className={styles.formControl} onSubmit={formik.handleSubmit}>
            <h1>Register</h1>
            <p>This is the register page</p>
            {renderCreateAccount()}
            <div className={styles.strike}>
              <span>form</span>
            </div>
            <TextField
              title="Full Name"
              name="full_name"
              placeholder="Enter your full name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.full_name}
              containerStyle={styles.mb_16}
              errorMessage={formik.touched.full_name && formik.errors.full_name}
            />
            <TextField
              title="Username"
              name="username"
              placeholder="Enter your username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              containerStyle={styles.mb_16}
              errorMessage={formik.touched.username && formik.errors.username}
            />
            <TextField
              title="Email"
              name="email"
              placeholder="Enter your mail"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              containerStyle={styles.mb_16}
              errorMessage={formik.touched.email && formik.errors.email}
            />
            <TextField
              title="Password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              isPassword
              containerStyle={styles.mb_16}
              errorMessage={formik.touched.password && formik.errors.password}
            />
            <Button
              color="primary"
              text={"Create Account"}
              type={"submit"}
              disabled={!formik.isValid && formik.dirty}
            />
          </form>
        </FormikProvider>
      </div>
    );
  };

  return (
    <div>
      {renderUserForm()} {handleModal()}
    </div>
  );
}
