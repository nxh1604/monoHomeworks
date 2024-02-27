import FirstCard from "@/components/FirstCard";
import Logo from "@/components/Logo";
import MenuCard from "@/components/MenuCard";
import Navbar from "@/components/Nav";
import Elipse from "@/components/SVG/Elipse";
import Facebook from "@/components/SVG/Facebook";
import Instagram from "@/components/SVG/Instagram";
import TikTok from "@/components/SVG/Tiktok";
import Twitter from "@/components/SVG/Twitter";
import { SliderFooter, SliderLeftButton, SliderRightButton } from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto relative">
      <div className="pt-[46px] pb-[20px] flex items-center justify-between contentLayout absolute max-w-[1240px] w-full z-10 left-[50%] translate-x-[-50%] border-b-[1px] border-[#CADAD4]">
        <Logo />
        <Navbar />
      </div>
      <section className="grid grid-cols-[1fr_769px]">
        <FirstCard className="mt-[236px] ml-[100px]" />
        <div className="bg-primary pt-[193px]">
          <div className="max-w-[calc(100%-100px)] flex justify-end">
            <SliderLeftButton className="relative top-[221px]" />
            <div className="flex flex-col items-center ml-[46px] justify-center">
              <Image
                src={"/main.png"}
                alt="coffee"
                height={540}
                width={408}
                className="w-[408px] h-[540px] object-contain"
              />
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
                Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It May Also Reduce The Risk Of Several
                Health Issues.
              </p>
            </div>
            <div className="flex gap-10">
              <SliderLeftButton />
              <SliderRightButton />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,325px)] gap-[134px]">
            <MenuCard description="100% Natural Arbika or Robusta, 30ml Cup" src="/menu1.png" price={50000} />
            <MenuCard title="Capuccino" description="Coffee 50%, Milk 50%, 280ml" src="/menu2.png" price={50000} />
            <MenuCard
              title="Americano"
              description="100% Natural Arbika or Robusta, 30ml Cup"
              src="/menu3.png"
              price={50000}
            />
          </div>
        </div>
      </section>
      <section className="relative">
        <Image src={"/banner.png"} width={1458} height={511} alt="banner coffee" />
        <p className="absolute text-[56px] leading-[56px] font-bold text-white top-[50%] translate-y-[-50%] max-w-[490px] uppercase right-[108px]">
          more than just a coffee shop
        </p>
      </section>
      <section className="flex flex-col justify-center items-center pb-[348px]">
        <h2 className="font-[600] text-[56px] leading-[56px] mt-[128px]">Happy Customer</h2>
        <p className="max-w-[645px] text-[#5F6575] text-lg text-center pt-5">
          So perhaps peopel who are genetically geared to reach to that extra cup of coffee could be boosting their
          health, as well as their productivity.
        </p>
        <div className="max-w-[1170px] flex gap-[62px] justify-between w-full pt-[62px]">
          <CustomerProfile />
          <CustomerComment name="john doe" describe="Sunior Designer of Lomosity" />
        </div>
      </section>
      <div className="relative">
        <SubcribeCard className="absolute shadow-[0_4px_20px_0_#00000033] top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[radial-gradient(#F8FAFC,#E7F9FD)]" />
        <section className="pt-[293px] bg-black pb-[76px]">
          <div className="contentLayout px-[52px]">
            <div className="mx-auto flex justify-between pb-[70px] border-b-[1px] border-white/20">
              <>
                <Logo />
                <p className="text-[#808E98] leading-[30px] mt-[10px] max-w-[320px]">
                  Sit amet nisl purus in mollis nunc sed id semper. In vitae turpis massa sed. Sed velit dignissim
                  sodales ut e
                </p>
              </>
              <div className="flex gap-[100px]">
                <FooterCard data={companyFooter} title="company" />
                <FooterCard data={ourpoliciesFooter} title="our policies" />
                <FooterCard data={socialMediaFooter} title="social media" />
              </div>
            </div>
            <p className="text-xs text-[#94999C]/50 text-center pt-[56px]">© 2022 VoiCoffee - All rights reserved.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

const FooterCard = ({ title, data }: { title: string; data: { name: string; link: string }[] }) => {
  return (
    <div>
      <h3 className="text-lg leading-[18px] tracking-[0.06rem] uppercase font-[600] text-white">{title}</h3>
      <ul className="text-[#B3B8BC]/80 space-y-[25px] mt-[26px]">
        {data.map((each) => (
          <li key={each.name}>
            <Link className="capitalize hover:underline hover:text-white flex items-center gap-[10px]" href={each.link}>
              {each.name === "facebook" && <Facebook />}
              {each.name === "tiktok" && <TikTok />}
              {each.name === "twitter" && <Twitter />}
              {each.name === "instagram" && <Instagram />}
              {each.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const companyFooter = [
  {
    name: "about us",
    link: "#",
  },
  {
    name: "features",
    link: "#",
  },
  {
    name: "watch our video",
    link: "#",
  },
  {
    name: "contact us",
    link: "#",
  },
];

const ourpoliciesFooter = [
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Terms of Use",
    link: "#",
  },
  {
    name: "Cookies Policy",
    link: "#",
  },
  {
    name: "GDPR Policy",
    link: "#",
  },
  {
    name: "refund Policy",
    link: "#",
  },
];

const socialMediaFooter = [
  {
    name: "facebook",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
  },
  {
    name: "instagram",
    link: "#",
  },
  {
    name: "tiktok",
    link: "#",
  },
];

const CustomerProfile = () => {
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="relative w-[290px]">
        <Image
          src={"/customer.png"}
          width={300}
          height={300}
          alt="avatar"
          className="w-[280px] h-[280px] object-cover object-top rounded-full bg-[#FFF7E9] scale-x-[-1]"
        />
        <div className="flex gap-[2px] absolute top-0 right-0 rotate-[8.4deg]">
          <Elipse />
          <Elipse />
        </div>
      </div>
      <SliderFooter color="brown" />
    </div>
  );
};

const CustomerComment = ({ name, describe }: { name: string; describe: string }) => {
  return (
    <div className="flex flex-col">
      <blockquote className="text-[30px] leading-[47px] italic font-[500] flex-1">
        “Voi Coffee The App clearly displays content as well as easy operations to help users have a good experience.”
      </blockquote>
      <div className="flex items-center gap-[90px]">
        <div>
          <h5 className="uppercase text-lg tracking-[0.07rem] font-[600]">{name}</h5>
          <p className="text-[#5F6575] text-xs">{describe}</p>
        </div>
        <Image src={"/star2.png"} className="w-[128px] h-[20px] object-cover" width={128} height={20} alt="star" />
      </div>
      <div className="flex gap-[40px] ml-auto">
        <SliderLeftButton />
        <SliderRightButton />
      </div>
    </div>
  );
};

const SubcribeCard = ({ className }: { className?: string }) => {
  return (
    <section className={"max-w-[1280px] w-full mx-auto bg-[#F8FAFC] rounded-tr-[60px] rounded-bl-[60px] " + className}>
      <div className="max-w-[620px] w-full mx-auto py-20">
        <h1 className="text-5xl leading-[72px] font-semibold text-headingPrimary mb-[10px] tracking-tighter text-center">
          Deliciousness to your inbox
        </h1>
        <p className="text-center leading-[28px] text-[#5F6575] mb-[64px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqut enim ad minim
        </p>
        <form className="max-w-[480px] bg-white p-[10px] rounded-tr-bl-2xl flex justify-between gap-2 mx-auto">
          <input className="text-xs leading-[21px] flex-1 pl-[22px]" placeholder="Your email address..." />
          <button className="text-xs leading-[21px] py-5 px-14 text-white rounded-tr-bl-2xl bg-black">Subscribe</button>
        </form>
      </div>
    </section>
  );
};
