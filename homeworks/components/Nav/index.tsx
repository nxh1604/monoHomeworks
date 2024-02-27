import Link from "next/link";
import UserIcon from "../SVG/UserIcon";
import CartIcon from "../SVG/CartIcon";

const Navbar = () => {
  return (
    <nav className="flex gap-[52px] items-end font-[500]">
      <ul className="flex text-sm gap-[52px]">
        {mainNav.map((each) => (
          <li className="first-letter:capitalize first:underline" key={each.name}>
            <Link href={each.href}>{each.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <UserIcon /> Account
        </div>
        <div className="flex gap-3">
          <CartIcon /> Cart
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
const mainNav = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "service",
    href: "#",
  },
  {
    name: "our menu",
    href: "#",
  },
  {
    name: "about us",
    href: "#",
  },
  {
    name: "contact",
    href: "#",
  },
];
