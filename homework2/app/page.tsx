"use client";
import Button from "@/components/Button";
import LabelSubmit from "@/components/LabelSubmit";
import QuizInput from "@/components/QuizInput";
import Textarea from "@/components/Textarea";
import TitleInput from "@/components/TitleInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ComponentPropsWithoutRef, Dispatch, SetStateAction, useState } from "react";
import { FieldError, SubmitErrorHandler, UseFormRegister, useFieldArray, useForm } from "react-hook-form";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoTrash } from "react-icons/io5";
import { PiImageSquare } from "react-icons/pi";
import { RiMenuAddFill } from "react-icons/ri";
import { ZodType, z } from "zod";

// form interface and inital data

interface FormDataType {
  quizTitle: string;
  quizDescription?: string;
  school?: string;
  course?: string;
  quizs: Array<QuizDataType>;
}

interface QuizDataType {
  question?: string;
  answer?: string;
  choices?: Array<string | undefined>;
}

const formSchema: ZodType<FormDataType> = z
  .object({
    quizTitle: z.string({
      required_error: "This field is required",
    }),
    quizDescription: z.string().optional(),
    school: z.string(),
    course: z.string(),
    quizs: z
      .array(
        z
          .object({
            question: z.string().optional(),
            answer: z.string().optional(),
            choices: z.string().optional().array().max(3),
          })
          .refine((data) => (data.question && data.answer) || (!data.question && !data.answer), {
            message: "Câu hỏi phải đi kèm với đáp án và ngược lại",
            path: ["answer"],
          })
      )
      .min(2),
  })
  .refine(
    (data) => {
      const condition0 = data.quizs[0].question && data.quizs[0].answer;
      const condition1 = data.quizs[1].question && data.quizs[1].answer;
      return condition0 && condition1;
    },
    {
      message: "BẠN CẦN HAI THẺ, MỘT NGÔN NGỮ CHO THUẬT NGỮ VÀ MỘT NGÔN NGỮ CHO ĐỊNH NGHĨA ĐỂ TẠO MỘT HỌC PHẦN.",
      path: ["quizs"],
    }
  );

const initialQuiz: QuizDataType = {
  question: "",
  answer: "",
  choices: [],
};

const initialQuizState: QuizDataType[] = [initialQuiz, initialQuiz, initialQuiz, initialQuiz];

const defaultFormValues: FormDataType = {
  quizTitle: "",
  quizDescription: "",
  school: "",
  course: "",
  quizs: initialQuizState,
};

// interface and inital state for Selected Quiz
interface ISelectedQuiz {
  select: null | number | string;
  open: boolean;
}

const initalSelectedQuizState = { select: null, open: false };

export default function Home() {
  const {
    register,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormDataType>({ resolver: zodResolver(formSchema), defaultValues: defaultFormValues });

  const { fields, append, remove } = useFieldArray({
    name: "quizs",
    control,
  });

  const [selectedQuiz, setSelectedQuiz] = useState<ISelectedQuiz>(initalSelectedQuizState);

  const handleDeleteQuizCard = (index: number) => {
    if (fields.length <= 2) return;
    remove(index);
  };

  const submitData = (data: FormDataType) => {
    console.log("magic: ", data);
  };

  const errorsSubmmitData: SubmitErrorHandler<FormDataType> = (data) => {
    if (data.quizs?.root) {
      const quiz0 = getValues("quizs")[0];
      if (!quiz0.answer && !quiz0.question) {
        setError(`quizs.${0}.question`, { type: "custom", message: "required" });
        setError(`quizs.${0}.answer`, { type: "custom", message: "required" });
      }
      const quiz = getValues("quizs")[1];
      if (!quiz.answer && !quiz.question) {
        setError(`quizs.${1}.question`, { type: "custom", message: "required" });
        setError(`quizs.${1}.answer`, { type: "custom", message: "required" });
      }
    }
  };
  const quizsData = getValues("quizs");
  if (quizsData[0].answer && quizsData[0].question && quizsData[1].answer && quizsData[1].question && errors.quizs) {
    clearErrors("quizs");
  }
  return (
    <main className="bg-[#0a092d] min-h-[100vh] py-8">
      <div className="flex justify-between items-center sticky top-0 max-w-[1300px] px-10 mx-auto text-white bg-[#0a092d] p-4 pb-10 z-10">
        <h1 className="first-letter:capitalize font-semibold text-3xl">tạo học phần mới</h1>{" "}
        <LabelSubmit htmlFor="submit" variant="primary">
          Tạo
        </LabelSubmit>
      </div>
      <form onSubmit={handleSubmit(submitData, errorsSubmmitData)} className="max-w-[1300px] px-10 mx-auto text-white ">
        <TitleInput required autoFocus title="tiêu đề" placeholder="Nhập tiêu đề" {...register("quizTitle")} />
        <div className="flex items-center gap-12 mt-10">
          <Textarea className="flex-1" {...register("quizDescription")} />
          <div className="flex-1 flex flex-col justify-start self-stretch gap-6">
            <TitleInput required showTitleOnFocus title="Tên trường" placeholder="Tên trường" {...register("school")} />
            <TitleInput required showTitleOnFocus title="Tên khóa" placeholder="Tên khóa" {...register("course")} />
          </div>
        </div>
        {errors.quizs && errors.quizs.root && <QuizError message={errors.quizs.root?.message} />}
        <div className="space-y-5 mt-12">
          {fields.map((field, index) => (
            <QuizCard
              questionErorr={errors.quizs?.[index]?.question}
              answerError={errors.quizs?.[index]?.answer}
              selectedQuiz={selectedQuiz}
              register={register}
              setSelectedQuiz={setSelectedQuiz}
              handleDeleteQuizCard={handleDeleteQuizCard}
              id={field.id}
              index={index}
              key={field.id}
            />
          ))}
          <AddQuiz nextQuiz={fields.length + 1} onClick={() => append(initialQuiz)} />
        </div>
        <LabelSubmit htmlFor="submit" className="block w-fit ml-auto mt-7" variant="primary" size="normal">
          Tạo
        </LabelSubmit>
        <input id="submit" type="submit" hidden />
      </form>
    </main>
  );
}

const QuizError = ({ message }: { message: string | undefined }) => {
  return (
    <div className="bg-red-400 p-4 uppercase w-[650px] text-center rounded-lg mx-auto mt-10 mb-10 text-black font-[500]">
      {message ? message : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corporis"}
    </div>
  );
};

const QuizCard = ({
  selectedQuiz,
  index,
  id,
  questionErorr,
  answerError,
  handleDeleteQuizCard,
  setSelectedQuiz,
  register,
}: {
  questionErorr?: FieldError;
  answerError?: FieldError;
  selectedQuiz: ISelectedQuiz;
  handleDeleteQuizCard: (index: number) => void;
  setSelectedQuiz: Dispatch<SetStateAction<ISelectedQuiz>>;
  register: UseFormRegister<FormDataType>;
  id: number | string;
  index: number;
}) => {
  const [urlImageObject, setUrlImageObject] = useState<null | string>(null);
  return (
    <div className="rounded-lg overflow-hidden">
      <QuizCardHeader currentQuiz={index} removeCurrentQuiz={handleDeleteQuizCard} />
      <div
        className="bg-slate-700"
        onClick={() => {
          if (selectedQuiz.select === id) return;
          setSelectedQuiz({ select: id, open: false });
        }}
      >
        <div className=" p-6 flex justify-between gap-12 items-end">
          <QuizInput
            quizCardError={!!questionErorr}
            option={selectedQuiz.select === id}
            quizId={id}
            label={`thuật ngữ`}
            className="flex-1 pt-3"
            {...register(`quizs.${index}.question`)}
          />
          <div className="flex-1 flex items-center gap-6">
            <QuizInput
              quizCardError={!!answerError}
              option={selectedQuiz.select === id}
              quizId={id}
              label={"định nghĩa"}
              className="flex-[5] pt-5"
              {...register(`quizs.${index}.answer`)}
            />
            {urlImageObject ? (
              <div className="relative">
                <Image
                  src={urlImageObject}
                  width={84}
                  height={60}
                  alt="uploaded iamge"
                  className="w-[84px] h-[60px] block object-cover self-start rounded-md "
                />
                <Button
                  onClick={() => {
                    URL.revokeObjectURL(urlImageObject);
                    setUrlImageObject(null);
                  }}
                  size="none"
                  variant="none"
                  className="hover:bg-yellow-400 hover:text-slate-800 absolute top-0 right-0 bg-slate-800/50 p-1 opacity-50 hover:opacity-100 rounded-sm"
                >
                  <IoTrash />
                </Button>
              </div>
            ) : (
              <>
                <label
                  htmlFor={`file-${index}`}
                  className="group w-[84px] h-[60px] border-dashed border-2 border-white self-start rounded-md flex flex-col justify-center items-center p-1 hover:cursor-pointer"
                >
                  <span className="group-[:hover]:text-yellow-400">
                    <PiImageSquare className="w-5 h-5 mb-[2px]" />
                  </span>
                  <span className="text-[10px] uppercase">hình ảnh</span>
                </label>
                <input
                  id={`file-${index}`}
                  type="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const src = URL.createObjectURL(file);
                      setUrlImageObject(src);
                    }
                  }}
                />
              </>
            )}
          </div>
        </div>
        {selectedQuiz.select === id && (
          <button
            type="button"
            className="flex gap-2 items-end ml-[calc(50%+1.5rem)] pb-6 hover:text-white/60"
            onClick={() => {
              setSelectedQuiz((prev) => {
                return { ...prev, open: !prev.open };
              });
            }}
          >
            <RiMenuAddFill className="w-6 h-6" />
            <span className="font-semibold">Thêm các lựa chọn đáp án</span>
          </button>
        )}
      </div>
      {selectedQuiz.select === id && selectedQuiz.open && <MultipheChoicesAnswer quizIndex={index} id={id} register={register} />}
    </div>
  );
};

const QuizCardHeader = ({ currentQuiz, removeCurrentQuiz }: { currentQuiz: number; removeCurrentQuiz: (index: number) => void }) => {
  return (
    <div className="flex items-center justify-between py-5 px-6 bg-slate-700 mb-[2px]">
      <span>{currentQuiz + 1}</span>
      <div className="flex items-center gap-3">
        <p>
          <HiOutlineBars2 className="w-5 h-5" />
        </p>
        <Button onClick={() => removeCurrentQuiz(currentQuiz)} size="none" variant="ghost">
          <IoTrash className="w-5 h-5" />
        </Button>
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

const MultipheChoicesAnswer = ({ quizIndex, id, register }: { quizIndex: number; id: string | number; register: UseFormRegister<FormDataType> }) => {
  return (
    <div className="bg-[#1a1d28] items-start justify-between gap-12 h-[384px] pt-10 pb-5 px-6 flex">
      <div className="flex-1 space-y-4">
        <h4>CÁC LỰA CHỌN ĐÁP ÁN TRẮC NGHIỆM</h4>
        <p>Với gói đăng ký Quizlet Plus, bạn có thể thêm đáp án trắc nghiệm cho các câu hỏi.</p>
        <p>
          Các tùy chọn bổ sung này sẽ xuất hiện dưới dạng các đáp án trắc nghiệm gây nhiễu, được sắp xếp ngẫu nhiên trong chế độ Học và Kiểm tra để
          giúp bạn không chỉ ghi nhớ đơn thuần.
        </p>
        <p>Xóa các lựa chọn</p>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <QuizInput
          {...register(`quizs.${quizIndex}.choices.0`)}
          option={false}
          label="lựa chọn đáp án"
          placeholder={"nhập lựa chọn trắc nghiệm " + (quizIndex + 1)}
          quizId={`1-${id}`}
        />
        <QuizInput
          {...register(`quizs.${quizIndex}.choices.1`)}
          option={false}
          label="lựa chọn đáp án"
          placeholder={"nhập lựa chọn trắc nghiệm " + (quizIndex + 2)}
          quizId={`2-${id}`}
        />
        <QuizInput
          {...register(`quizs.${quizIndex}.choices.2`)}
          option={false}
          label="lựa chọn đáp án"
          placeholder={"nhập lựa chọn trắc nghiệm " + (quizIndex + 3)}
          quizId={`3-${id}`}
        />
      </div>
    </div>
  );
};
