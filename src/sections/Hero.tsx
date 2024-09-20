"use client";
import SwipeButton from "@/components/animata/button/swipe-button";
import ArrowRight from "../assets/arrow-right.svg";
import cogImage from "../assets/cog.png";
import cylinderImage from "../assets/cylinder.png";
import noodleImage from "../assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const TranslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-21, 45]);
  return (
    <section
      ref={heroRef}
      className=" py-7 md:py-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip "
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className=" md:w-[500px]">
            <div className="text-sm   inline-flex px-3 py-1 tracking-tight border-gray-500 border-dotted border rounded-xl font-bold">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter bg-gradient-to-b from-black to-blue-500 bg-clip-text text-transparent mt-6">
              Pathway to productivity
            </h1>
            <p className=" text-[#010D3E]  mt-4 mb-4 tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex items-center gap-5 mt-7">
              <SwipeButton
                className=""
                firstClass="bg-black text-white"
                firstText="Get for Free"
                secondClass="bg-white text-black"
                secondText="Get for Free"
              />
              <div className="flex items-center">
                <SwipeButton
                  className=""
                  firstClass=""
                  firstText="Learn More"
                  secondClass=""
                  secondText="Learn More"
                />
                <ArrowRight className="w-6 h-6 inline-flex justify-center items-center" />
              </div>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:ml-10 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-12 img1"
              priority
              animate={{
                translateY: [-30, 30],
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "linear",
                },
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder"
              className="md:block md:absolute md:-left-32 hidden  -rotate-12"
              width={200}
              height={200}
              priority
              style={{
                translateY: TranslateY,
                rotate: rotate,

              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodle"
              className="md:block md:absolute  hidden top-[524px] left-[444px] rotate-12 "
              width={200}
              height={200}
              priority
              style={{
                translateY: TranslateY,
                rotate: rotate,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
