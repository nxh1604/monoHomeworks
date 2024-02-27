import Image from "next/image";
import MouseIcon from "../SVG/MouseIcon";

const FirstCard = ({ className }: { className?: string }) => {
  return (
    <div className={"max-w-[516px] " + className}>
      <h2 className="font-[600] text-[80px] uppercase leading-[82px]  ">enjoy life sip by sip</h2>
      <div className="mt-[18px] space-y-[26px]">
        <p className="text-lg">
          <span className="text-primary">Voi Coffee</span> is aimed at everyone, especially young, active, busy people. The brand is committed to
          providing customers with great coffee experiences, even when they are in a hurry.
        </p>
        <div className="flex gap-20 items-center relative text-lg">
          <MouseIcon />
          <div className="absolute w-[1px] bg-[#4b5060]/20 h-full left-[49px]"></div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p className="text-[#181B1D] font-[500]">Trusted Users</p>
              <div className="h-[3px] w-[64.5px] bg-[#AA9584] relative top-[1px]"></div>
            </div>
            <Image className="w-[140px] h-[24px] object-contain" src={"/Star.png"} width={140} height={24} alt="five stars" />
            <p className="flex gap-2 items-center">
              Over <span className="text-primary underline">13.5K</span> happy users all over the world{" "}
              <Image className="w-[22px] h-[22px] object-cover" src={"/SmilingFace.png"} width={22} height={22} alt="smiling face" />
            </p>
          </div>
        </div>
        <button className="bg-primary text-white py-[21px] px-[42px] rounded-tr-bl-2xl">Order now</button>
      </div>
    </div>
  );
};

export default FirstCard;
