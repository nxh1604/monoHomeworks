"use client";

import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const TitleInput = forwardRef<
  HTMLInputElement,
  {
    inputDisable?: boolean;
    title: string;
    showTitleOnFocus?: boolean;
    placeholder: string;
  } & ComponentPropsWithoutRef<"input">
>(({ inputDisable, title, showTitleOnFocus = false, placeholder, children, ...rest }, ref) => {
  return (
    <div className="rounded-lg h-12 overflow-hidden relative">
      <div
        className={
          "h-full pl-4 pr-12 py-1 has-[:focus]:border-b-2 has-[:focus]:border-white flex flex-col-reverse " +
          ` ${inputDisable ? "bg-slate-800" : "bg-slate-700"}`
        }
      >
        <input
          ref={ref}
          disabled={inputDisable}
          {...rest}
          className={clsx(
            "w-full peer outline-none text-base leading-tight font-semibold placeholder:text-white placeholder-shown:h-full",
            {
              "h-full": showTitleOnFocus,
            },
            `${inputDisable ? "bg-slate-800" : "bg-slate-700"}`
          )}
          placeholder={placeholder}
          type="text"
        />
        <h4
          className={
            "text-xs first-letter:capitalize font-semibold peer-[:placeholder-shown]:hidden" +
            ` ${showTitleOnFocus ? "hidden peer-[:focus]:block" : ""}`
          }
        >
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
});

TitleInput.displayName = "TitleInput";

export default TitleInput;
