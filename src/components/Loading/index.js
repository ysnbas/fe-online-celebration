import React from "react";
import Lottie from "lottie-react";
import AnimationCake from "./AnimationCake.json";

const style = {
  height: 100,
};

export default function Loading() {
  return <Lottie animationData={AnimationCake} loop={true} style={style} />;
}
