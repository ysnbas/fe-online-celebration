"use client";
import SplitLayout from "@Layouts/SplitLayout";
import React from "react";
import { useRouter } from "next/navigation";
import LoginSide from "@Modules/AuthModules/LoginSide";
import RegisterSide from "@Modules/AuthModules/RegisterSide";

export default function Layout({ children }) {
  const router = useRouter();
  const routeControl = router.pathname === "/accounts/register" ? true : false;

  return (
    <SplitLayout
      leftContent={children}
      rightContent={routeControl ? <RegisterSide /> : <LoginSide />}
      gap={0}
      rightChangeColor
    />
  );
}
