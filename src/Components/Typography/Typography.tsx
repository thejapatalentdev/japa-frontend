import { ITypoProps } from "@/lib/types";
import React from "react";

const Typography: React.FC<ITypoProps> = ({
  size,
  variant,
  weight,
  children,
  className,
}) => {
  let fontSize = "text-[14px]";
  let fontWeight = "font-normal";
  let fontColor = "text-black";

  //   Sizes
  if (size === "xs") {
    fontSize = "text-[14px]";
  } else if (size === "sm") {
    fontSize = "text-[16px]";
  } else if (size === "md") {
    fontSize = "text-[18px]";
  } else if (size === "lg") {
    fontSize = "text-[20px]";
  } else if (size === "xl") {
    fontSize = "text-[24px]";
  } else if(size === 'jumbo') {
    fontSize = "lg:text-[60px] text-[30px]";
  }

  //   variant
  if (variant === "primary") {
    fontColor = "text-[#313033]";
  } else if (variant === "secondary") {
    fontColor = "text-[#827DAB]";
  } else if (variant === "tertiary") {
    fontColor = "text-[#352C76]";
  } else {
    fontColor = "text-[#5E5989]";
  }

  //   weight
  if (weight === "normal") {
    fontWeight = "font-[400]";
  } else if (weight === "medium") {
    fontWeight = "font-[500]";
  } else if (weight === "semibold") {
    fontWeight = "font-[600]";
  } else if (weight === "bold") {
    fontWeight = "font-[700]";
  } else {
    fontWeight = "font-[400]";
  }
  return (
    <p
      className={`${fontSize} ${fontColor} ${fontWeight} ${className}`}
    >
      {children}
    </p>
  );
};

export default Typography;
