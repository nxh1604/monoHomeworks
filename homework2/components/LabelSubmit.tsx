import clsx from "clsx";
import { ComponentProps } from "react";

const LabelSubmit = ({
  className,
  size = "small",
  variant = "primary",
  children,
  ...rest
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size?: "none" | "icon" | "text" | "small" | "normal";
} & ComponentProps<"label">) => {
  return (
    <label
      className={clsx(
        "first-letter:capitalize hover:cursor-pointer",
        {
          "bg-transparent": variant === "ghost",
          "rounded-lg bg-indigo-600 disabled:bg-slate-700 hover:bg-indigo-700 font-semibold": variant === "primary",
          "": size === "none",
          "py-2 px-4": size === "small",
          "py-5 px-8": size === "normal",
          "rounded-full p-[6px] bg-[#0a092d] border-[2px] border-slate-700": size === "icon",
          "bg-[#0a092d] py-[6px] px-[30px] border-[2px] border-slate-700": size === "text",
        },
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default LabelSubmit;
