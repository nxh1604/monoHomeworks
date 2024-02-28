"use client";
import clsx from "clsx";
import { ComponentProps, ComponentPropsWithoutRef, Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const [quizArray, setQuizArray] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  const [selectedQuiz, setSelectedQuiz] = useState<null | string | number>(null);
  const handleDeleteQuizCard = (id: number | string) => {
    if (quizArray.length <= 2) return;
    setQuizArray((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAddQuizCard = () => {
    setQuizArray((prev) => [...prev, { id: prev[prev.length - 1].id + 1 }]);
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
          {quizArray.map((quiz, index) => (
            <QuizCard
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
              handleDeleteQuizCard={handleDeleteQuizCard}
              id={quiz.id}
              index={index + 1}
              key={quiz.id}
            />
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
      {...rest}
    >
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
      {...rest}
    >
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
          }
        >
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
  selectedQuiz,
  index,
  id,
  handleDeleteQuizCard,
  setSelectedQuiz,
}: {
  selectedQuiz: number | string | null;
  handleDeleteQuizCard: (id: number | string) => void;
  setSelectedQuiz: Dispatch<SetStateAction<null | number | string>>;
  id: number;
  index: number;
}) => {
  const [yesNoArray, setYesNoArray] = useState(["", "", ""]);
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="flex items-center justify-between py-5 px-6 bg-slate-700 mb-[2px]">
        <span>{index}</span>
        <div className="flex items-center gap-3">
          <p>Div1</p>
          <Button onClick={() => handleDeleteQuizCard(id)} size="none" variant="ghost">
            Delete
          </Button>
        </div>
      </div>
      <div onClick={() => setSelectedQuiz(id)} className="bg-slate-700 p-6 flex justify-between gap-12 items-end">
        <QuizInput quizId={id} label={`thuật ngữ`} className="flex-1 pt-3" />
        <div className="flex-1 flex items-center gap-6">
          <QuizInput quizId={id} label={"định nghĩa"} className="flex-[5] pt-5" />
          <label
            htmlFor={`file-${index}`}
            className="group w-[84px] h-[60px] border-dashed border-2 border-white self-start rounded-md flex flex-col justify-center items-center p-1 hover:cursor-pointer"
          >
            <span className="group-[:hover]:text-yellow-400">icon</span>
            <span className="text-[10px] uppercase">hình ảnh</span>
          </label>
        </div>
      </div>
      {selectedQuiz === id && (
        <div className="bg-[#1a1d28] items-start justify-between gap-12 h-[384px] pt-10 pb-5 px-6 flex">
          <div className="flex-1 space-y-4">
            <h4>CÁC LỰA CHỌN ĐÁP ÁN TRẮC NGHIỆM</h4>
            <p>Với gói đăng ký Quizlet Plus, bạn có thể thêm đáp án trắc nghiệm cho các câu hỏi.</p>
            <p>
              Các tùy chọn bổ sung này sẽ xuất hiện dưới dạng các đáp án trắc nghiệm gây nhiễu, được sắp xếp ngẫu nhiên trong chế độ Học và Kiểm tra
              để giúp bạn không chỉ ghi nhớ đơn thuần.
            </p>
            <p>Xóa các lựa chọn</p>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {yesNoArray.map((each, index) => (
              <QuizInput
                key={`${index} ${id}`}
                option={false}
                label="lựa chọn đáp án"
                placeholder={"nhập lựa chọn trắc nghiệm " + (index + 1)}
                quizId={`${index} ${id}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const QuizInput = ({
  quizId,
  option = true,
  label,
  className,
  ...rest
}: { option?: boolean; quizId: number | string; label: string } & ComponentPropsWithoutRef<"input">) => {
  return (
    <div className={className}>
      <input
        id={label + ` ${quizId}`}
        className="w-full bg-transparent pb-1 shadow-[0_2px_0_0_white] outline-none focus:shadow-[0_4px_0_0_#ffcd1f] placeholder:capitalize"
        {...rest}
        type="text"
      />
      <div className="mt-2 flex justify-between text-[12px] uppercase font-[500] pt-1">
        <label className="pr-4" htmlFor={label + ` ${quizId}`}>
          {label}
        </label>
        {option && <p className="text-[#3ccfcf]">Option</p>}
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
