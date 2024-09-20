import Image from "next/image";
import Logo from "../assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content[''] before:top-2 before:bottom-0 before:blur before:w-full before:absolute before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500">
          <Image
            src={Logo}
            alt="Sass Logo"
            width={50}
            height={50}
            className="mx-auto relative"
            priority
          />
        </div>
        <nav className="flex gap-5 items-center justify-center font-bold mt-6 max-md:flex-col md:gap-0 md:justify-start max-md:text-lg">
          <div className="flex gap-5 items-center mt-6 justify-center mx-auto max-md:flex-col  max-md:text-lg">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </div>
        </nav>
        <div className="flex gap-5 items-center mt-6 justify-center">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
