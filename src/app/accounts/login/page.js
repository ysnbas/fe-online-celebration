"use client";
import React, { useState } from "react";
import styles from "./Login.module.scss";
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { postLogin } from "services/accounts";
import Cookies from "js-cookie";
import Modal from "@Components/Modal";

export default function Login() {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    postLogin(values)
      .then((res) => {
        if (res?.success) {
          Cookies.set("accessToken", res.token);
          router.push("/homepage");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setVisible(true);
      });
  };

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
        <FormikProvider value={formik}>
          <form className={styles.formControl} onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <p>This is the login page</p>
            {renderCreateAccount()}
            <div className={styles.strike}>
              <span>form</span>
            </div>
            <TextField
              title="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              containerStyle={styles.mb_16}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errorMessage={(formik.errors.email, formik.touched.email)}
            />
            <TextField
              title="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              isPassword
              containerStyle={styles.mb_16}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              errorMessage={(formik.errors.password, formik.touched.password)}
            />
            <Button color="primary" text={"Login"} type={"submit"} />
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
