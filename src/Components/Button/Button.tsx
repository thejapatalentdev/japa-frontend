import { cn } from "@/lib/utils";
import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
}
const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  children,
  variant,
  ...props
}) => {
  let backgroundColor = "";

  if (variant === "primary") {
    backgroundColor =
      "bg-[#5922A9] hover:bg-[#5822a9c9] active:bg-[#5922A9] text-white";
  } else if (variant === "secondary") {
    backgroundColor =
      "bg-transparent hover:bg-[#5822a9c9] active:bg-[#5922A9] border border-[#5922A9] text-[#5922A9] hover:text-white";
  } else if (variant === "tertiary") {
    backgroundColor =
      "bg-transparent hover:bg-[#5822a9c9] active:bg-[#5922A9] text-white border border-black !py-2 !px-4 !text-black !font-normal !hover:text-white";
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        `text-center text-[16px] lg:font-bold text-white text-nowrap lg:py-4 py-2 px-6 lg:px-12 rounded-full transition-all ease-in-out ${backgroundColor}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
