import React from "react";
import SVG from "react-inlinesvg";

const Icon = ({ name, color, size = 24 }) => {
  return (
    <SVG
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      preProcessor={(code) =>
        code.replace(/stroke=".*?"/g, `stroke="${color}"`)
      }
    />
  );
};

export default Icon;
