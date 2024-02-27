import FirstCard from "@/components/FirstCard";
import Logo from "@/components/Logo";
import MenuCard from "@/components/MenuCard";
import Navbar from "@/components/Nav";
import { SliderFooter, SliderLeftButton, SliderRightButton } from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto relative pb-[100px]">
      <div className="pt-[46px] pb-[20px] flex items-center justify-between contentLayout absolute max-w-[1240px] w-full z-10 left-[50%] translate-x-[-50%] border-b-[1px] border-[#CADAD4]">
        <Logo />
        <Navbar />
      </div>
      <section className="grid grid-cols-[1fr_769px]">
        <FirstCard className="mt-[236px] ml-[100px]" />
        <div className="bg-primary pt-[193px]">
          <div className="max-w-[calc(100%-100px)] flex justify-end">
            <SliderLeftButton className="relative top-[221px]" />
            <div className="flex flex-col items-center ml-[46px]">
              <Image src={"/main.png"} alt="coffee" height={540} width={408} className="w-[408px] h-[540px] object-contain" />
              <SliderFooter className="pb-[56px] pt-[63px]" />
            </div>
            <SliderRightButton className="ml-[24px] relative top-[221px]" />
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC]">
        <div className="contentLayout pt-[148px] pb-[108px]">
          <div className="flex justify-between items-center pb-[10px]">
            <div className="max-w-[725px]">
              <h3 className="font-bold text-[#071731] text-[56px]">Specical menu for you</h3>
              <p className="text-[#5F6575] text-lg">
                Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It May Also Reduce The Risk Of Several Health Issues.
              </p>
            </div>
            <div className="flex gap-10">
              <SliderLeftButton />
              <SliderRightButton />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,325px)] gap-[134px]">
            <MenuCard description="100% Natural Arbika or Robusta, 30ml Cup" src="/menu1.png" price={50000} />
            <MenuCard title="Capuccino" description="Coffee 50%, Milk 50%, 280ml" src="/menu1.png" price={50000} />
            <MenuCard title="Americano" description="100% Natural Arbika or Robusta, 30ml Cup" src="/menu1.png" price={50000} />
          </div>
        </div>
      </section>
      <section className="relative">
        <Image src={"/banner.png"} width={1458} height={511} alt="banner coffee" />
        <p className="absolute text-[56px] leading-[56px] font-bold text-white top-[50%] translate-y-[-50%] max-w-[490px] uppercase right-[108px]">
          more than just a coffee shop
        </p>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h2 className="font-[600] text-[56px] leading-[56px] mt-[128px]">Happy Customer</h2>
        <p className="max-w-[645px] text-[#5F6575] text-lg text-center pt-5">
          So perhaps peopel who are genetically geared to reach to that extra cup of coffee could be boosting their health, as well as their
          productivity.
        </p>
        <div className="max-w-[1170px] w-full">
          <CustomerProfile />
          <CustomerComment />
        </div>
      </section>
    </main>
  );
}

const CustomerProfile = () => {
  return (
    <div>
      <div>
        <Image
          src={"/customer.png"}
          width={250}
          height={300}
          alt="avatar"
          className="w-[280px] h-[280px] object-cover object-top rounded-full bg-[#FFF7E9]"
        />
      </div>
      <SliderFooter />
    </div>
  );
};

const CustomerComment = () => {
  return <div className="dis"></div>;
};
