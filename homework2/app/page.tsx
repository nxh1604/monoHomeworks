"use client";
import clsx from "clsx";
import { ComponentProps, ComponentPropsWithoutRef, useState } from "react";

export default function Home() {
  const [quizArray, setQuizArray] = useState([1, 2, 3, 4]);
  const handleDeleteQuizCard = (id: number) => {
    if (quizArray.length <= 2) return;
    setQuizArray((prev) => prev.filter((item) => item !== id));
  };
  const handleAddQuizCard = () => {
    setQuizArray((prev) => [...prev, prev[prev.length - 1] + 1]);
  };
  return (
    <main className="bg-[#0a092d] min-h-[100vh] py-8">
      <div className="flex justify-between items-center sticky top-0 max-w-[1300px] px-10 mx-auto text-white bg-[#0a092d] p-4 pb-10 z-10">
        <h1 className="first-letter:capitalize font-semibold text-3xl">tạo học phần mới</h1>{" "}
        <LabelSubmit htmlFor="submit" variant="primary">
          Tạo
        </LabelSubmit>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="max-w-[1300px] px-10 mx-auto text-white ">
        <TitleInput autoFocus title="tiêu đề" placeholder="Nhập tiêu đề" />
        <div className="flex items-center gap-12 mt-10">
          <Textarea className="flex-1" />
          <div className="flex-1 flex flex-col justify-start self-stretch gap-6">
            <TitleInput title="tiêu đề" placeholder="Nhập tiêu đề" />
            <TitleInput title="tiêu đề" placeholder="Nhập tiêu đề" />
          </div>
        </div>
        <div className="space-y-5 mt-12">
          {quizArray.map((number, index) => (
            <QuizCard handleDeleteQuizCard={handleDeleteQuizCard} id={number} index={index + 1} key={number} />
          ))}
          <AddQuiz nextQuiz={quizArray.length + 1} onClick={handleAddQuizCard} />
        </div>
        <LabelSubmit htmlFor="submit" className="block w-fit ml-auto mt-7" variant="primary" size="normal">
          Tạo
        </LabelSubmit>
        <input id="submit" type="submit" hidden />
      </form>
    </main>
  );
}

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
      {...rest}>
      {children}
    </label>
  );
};

const Button = ({
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
          "rounded-full h-10 w-10 p-[6px] bg-[#0a092d] border-[2px] border-slate-700": size === "icon",
          "bg-[#0a092d] py-[6px] px-[30px] border-[2px] border-slate-700": size === "text",
        },
        className
      )}
      {...rest}>
      {children}
    </label>
  );
};

const TitleInput = ({
  title,
  showTitleOnFocus = false,
  placeholder,
  children,
  ...rest
}: { title: string; showTitleOnFocus?: boolean; placeholder: string } & ComponentPropsWithoutRef<"input">) => {
  return (
    <div className="rounded-lg h-12 overflow-hidden relative">
      <div className="bg-slate-700 h-full pl-4 pr-12 py-1 has-[:focus]:border-b-2 has-[:focus]:border-white flex flex-col-reverse">
        <input
          {...rest}
          className="w-full peer bg-slate-700 outline-none text-base leading-tight font-semibold placeholder:text-white placeholder-shown:h-full"
          placeholder={placeholder}
          type="text"
        />
        <h4
          className={
            "text-xs first-letter:capitalize font-semibold peer-[:placeholder-shown]:hidden" +
            ` ${showTitleOnFocus ? "hidden peer-[:focus]:block" : ""}`
          }>
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
};

const Textarea = ({ className, ...rest }: ComponentPropsWithoutRef<"textarea">) => {
  return (
    <textarea
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
};

const QuizCard = ({
  index,
  id,
  handleDeleteQuizCard,
}: {
  handleDeleteQuizCard: (id: number) => void;
  id: number;
  index: number;
}) => {
  return (
    <div className="space-y-[2px] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between py-5 px-6 bg-slate-700 ">
        <span>{index}</span>
        <div className="flex items-center gap-3">
          <p>Div1</p>
          <Button onClick={() => handleDeleteQuizCard(id)} size="none" variant="ghost">
            Delete
          </Button>
        </div>
      </div>
      <div className="bg-slate-700 p-6 flex justify-between gap-6 items-end">
        <QuizInput quizId={id} label={`thuật ngữ`} className="flex-[6] pt-3" />
        <QuizInput quizId={id} label={"định nghĩa"} className="flex-[5] pt-5" />
        <label
          htmlFor={`file-${index}`}
          className="group w-[84px] h-[60px] border-dashed border-2 border-white self-start rounded-md flex flex-col justify-center items-center p-1 hover:cursor-pointer">
          <span className="group-[:hover]:text-yellow-400">icon</span>
          <span className="text-[10px] uppercase">hình ảnh</span>
        </label>
        <input id={`file-${index}`} hidden />
      </div>
    </div>
  );
};

const QuizInput = ({
  quizId,
  label,
  className,
  ...rest
}: { quizId: number; label: string } & ComponentPropsWithoutRef<"input">) => {
  return (
    <div className={className}>
      <input
        id={label + ` ${quizId}`}
        className="w-full bg-transparent shadow-[0_2px_0_0_white] outline-none focus:shadow-[0_4px_0_0_#ffcd1f]"
        {...rest}
        type="text"
      />
      <div className="mt-2 flex justify-between text-[12px] uppercase font-[500]">
        <label className="pr-4" htmlFor={label + ` ${quizId}`}>
          {label}
        </label>
        <p className="text-[#3ccfcf]">Option</p>
      </div>
    </div>
  );
};

const AddQuiz = ({ nextQuiz, ...props }: { nextQuiz: number } & ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className="flex bg-slate-700 items-center h-[100px] px-5 rounded-lg group hover:cursor-pointer">
      <span className="font-semibold text-lg text-black/50">{nextQuiz}</span>
      <div className="flex-1 flex justify-center items-center">
        <span className="font-semibold uppercase border-b-[6px] border-[#3ccfcf] pb-2 group-[:hover]:text-yellow-400 group-[:hover]:border-yellow-400">
          + Thêm thẻ
        </span>
      </div>
    </div>
  );
};
