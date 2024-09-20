import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";
import Link from "next/link";
import SwipeButton from "@/components/animata/button/swipe-button";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/", label: "Features" },
  { href: "/", label: "Customers" },
  { href: "/", label: "Updates" },
  { href: "/", label: "Help" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50  backdrop-blur-lg  ">
      <div className="flex items-center justify-center py-3 bg-black text-white text-sm">
        <div className="inline-flex items-center gap-2">
          <p className=" md:flex hidden text-gray-400 font-bold">
            Streamline your workflow and boost your productivity.
          </p>
          <h1 className="font-bold text-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text brightness-150 text-xl tracking">
            Get started for free
          </h1>
          <ArrowRight
            className="w-6 h-6 inline-flex justify-center items-center
        "
          />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Sass Logo" width={50} height={50} />
            <MenuIcon className="w-7 h-7 md:hidden" />
            <nav className="hidden md:flex gap-5 text-black/60 items-center font-bold">
              {navLinks.map((link) => (
                <Link key={link.label} className="nav-active" href={link.href}>
                  {link.label}
                </Link>
              ))}
              <SwipeButton
                className=""
                firstClass="bg-black text-white"
                firstText="Get for Free"
                secondClass="bg-white text-black"
                secondText="Get for Free"
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
