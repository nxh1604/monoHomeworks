import { PropsWithChildren } from "react";

const SVGWrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-[30px] h-[30px] rounded-full bg-[#272C30] flex items-center justify-center">{children}</div>;
};

export default SVGWrapper;
