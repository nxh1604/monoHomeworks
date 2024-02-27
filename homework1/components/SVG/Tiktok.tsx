import Image from "next/image";
import SVGWrapper from "../SVGWrapper";

const TikTok = () => {
  return (
    <SVGWrapper>
      <Image className="w-[28px] h-[28px] object-cover" src={"/tiktok.png"} width={28} height={28} alt="tiktok" />
    </SVGWrapper>
  );
};

export default TikTok;
