import Image from "next/image";
import { PropsWithChildren } from "react";
import CartIcon from "../SVG/CartIcon";
import { formatCurrency } from "@/utils";

const MenuCard = ({
  src,
  title,
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi doloribus eligendi quidem consequuntur error reiciendis nobis ipsam totam at!",
  price,
}: {
  description?: string;
  title?: string;
  src: string;
  price: number;
}) => {
  return (
    <div className="rounded-tr-bl-2xl bg-[#D9D9D9] relative h-[310px] mt-[88px] ">
      <Image
        className="w-[242px] h-[176px] object-cover absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
        src={src}
        width={242}
        height={177}
        alt="drink"
      />
      <div className="pt-[105px] px-8 flex flex-col h-full">
        <h4 className={"text-2xl leading-[56px] font-bold " + ` ${title ? "" : "text-[#D9D9D9]"}`}>{title ? title : "No title"}</h4>
        <p className="h-[46px] line-clamp-2 text-[15px] ">{description}</p>
        <div className="pt-[25px] flex gap-[25px] justify-center">
          <ButtonIcon>
            <CartIcon fill="#fff" />
          </ButtonIcon>
          <ButtonIcon>
            <Image src={"/Favorite.png"} alt="like" width={28} height={28} className="w-[28px] h-[28px] objet-cover" />
          </ButtonIcon>
        </div>
        <p className="px-6 py-2 text-lg font-bold uppercase text-white bg-secondary absolute rounded-[10px] bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]">
          {formatCurrency(price)} vnd
        </p>
      </div>
    </div>
  );
};

const ButtonIcon = ({ children }: PropsWithChildren) => {
  return <button className="bg-secondary rounded-[10px] w-[38px] h-[38px] centerFlex">{children}</button>;
};

export default MenuCard;
