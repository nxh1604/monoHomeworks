import ArrowLeftIcon from "../SVG/ArrowLeft";
import ArrowRightIcon from "../SVG/ArrowRight";

const SliderLeftButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={
        "w-[80px] h-[80px] rounded-full border-[1px] border-borderPrimary flex items-center justify-center bg-white/10 " +
        className
      }>
      <ArrowLeftIcon />
    </button>
  );
};

const SliderRightButton = ({ className }: { className?: string }) => {
  return (
    <button className={"w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#291E24] " + className}>
      <ArrowRightIcon />
    </button>
  );
};

const SliderFooter = ({ className, color = "white" }: { className?: string; color?: "white" | "brown" }) => {
  const active = 1;
  return (
    <div className={"flex gap-4 items-center max-w-[110px] w-full " + className}>
      {footerLength.map((_, index) => {
        return active === index ? (
          <div key={index} className="w-[20px] h-[20px] rounded-full border-[1px] border-[#291E24] p-[5px]">
            <div className="bg-[#291E24] w-full h-full rounded-full"></div>
          </div>
        ) : (
          <div
            key={index}
            className={"w-[15px] h-[15px] rounded-full" + ` ${color === "white" ? "bg-white" : "bg-primary"}`}></div>
        );
      })}
    </div>
  );
};

const footerLength = new Array(4).fill(0);

export { SliderLeftButton, SliderRightButton, SliderFooter };
