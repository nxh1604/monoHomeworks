"use client";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, { className: string } & ComponentPropsWithoutRef<"textarea">>(({ className, ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      {...rest}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = "auto";
        target.style.height = `${target.scrollHeight}px`;
      }}
      className={
        "outline-none w-full resize-none rounded-lg bg-slate-700 py-2 px-4 focus:border-b-2 focus:border-indigo-600 min-h-[120px] max-h-[300px] " +
        className
      }
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
