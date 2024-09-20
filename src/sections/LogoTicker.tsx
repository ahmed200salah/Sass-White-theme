"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="py-16 pb-20 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000,transparent)] ">
          <motion.div
            className="flex flex-none justify-center gap-16 pr-20"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {logos.map((logo) => (
              <Image
                className="logo-ticker"
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                priority
              />
            ))}
            {logos.map((logo) => (
              <Image
                className="logo-ticker"
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                priority
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
