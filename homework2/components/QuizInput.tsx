import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const QuizInput = forwardRef<
  HTMLInputElement,
  { option?: boolean; quizId: number | string; label: string; quizCardError?: boolean } & ComponentPropsWithoutRef<"input">
>(({ quizCardError = false, quizId, option = true, label, className, ...rest }, ref) => {
  return (
    <div className={className}>
      <input
        ref={ref}
        id={label + ` ${quizId}`}
        className="w-full bg-transparent pb-1 shadow-[0_2px_0_0_white] outline-none focus:shadow-[0_4px_0_0_#ffcd1f] placeholder:capitalize"
        {...rest}
        type="text"
      />
      <div className="mt-2 flex justify-between text-[12px] uppercase font-[500] pt-1">
        <label
          className={clsx("pr-4", {
            "text-red-600": quizCardError,
          })}
          htmlFor={label + ` ${quizId}`}
        >
          {label}
        </label>
        {quizCardError ? (
          <button
            className={clsx("text-[#3ccfcf] uppercase", {
              "text-red-500": quizCardError,
            })}
          >
            Option
          </button>
        ) : option ? (
          <button
            className={clsx("text-[#3ccfcf] uppercase", {
              "text-red-500": quizCardError,
            })}
          >
            Option
          </button>
        ) : null}
      </div>
    </div>
  );
});

QuizInput.displayName = "QuizInput";

export default QuizInput;
