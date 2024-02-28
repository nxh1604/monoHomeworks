import clsx from "clsx";
import { ComponentProps } from "react";

export default function Home() {
  return (
    <main className="bg-[#0a092d] min-h-[1000vh] py-8">
      <div className="flex justify-between items-center sticky top-[10px] max-w-[1300px] px-10 mx-auto text-white bg-[#0a092d] p-4">
        <h1 className="first-letter:capitalize font-semibold text-3xl">tạo học phần mới</h1> <Button variant="primary">Tạo</Button>
      </div>
      <form className="max-w-[1300px] px-10 mx-auto text-white">
        <input className="w-full" />
      </form>
    </main>
  );
}

const Button = ({
  size = "small",
  variant = "primary",
  children,
  ...rest
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size?: "none" | "icon" | "text" | "small" | "normal";
} & ComponentProps<"button">) => {
  return (
    <button
      className={clsx("first-letter:capitalize", {
        "bg-transparent": variant === "ghost",
        "rounded-lg bg-primary disabled:bg-disable hover:bg-hover": variant === "primary",
        "": size === "none",
        "py-2 px-4": size === "small",
        "py-4 px-6": size === "normal",
        "rounded-full p-[6px] bg-[#0a092d] border-[2px] border-disable": size === "icon",
        "bg-[#0a092d] py-[6px] px-[30px] border-[2px] border-disable": size === "text",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
