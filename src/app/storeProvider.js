"use client";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { useEffect, useRef, useState } from "react";
import { getProfileData } from "services/accounts";
import { setUser } from "@Lib/features/user/userSlice";

export default function StoreProvider({ children }) {
  const storeRef = useRef(makeStore);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await getProfileData();
      if (res?.success) {
        storeRef.current.dispatch(setUser(res.data));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUserDataLoaded(true);
    }
  };

  // Don't render children until user data is loaded
  if (!isUserDataLoaded) return null;

  return <Provider store={storeRef.current}>{children}</Provider>;
}
