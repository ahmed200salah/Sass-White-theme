"use client";
import SwipeButton from "@/components/animata/button/swipe-button";
import ArrowRight from "../assets/arrow-right.svg";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export const CallToAction = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const TranslateY = useTransform(scrollYProgress, [0, 1], [450, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 15]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip ">
      <div className="container">
        <div className="max-w-[500px] mx-auto text-center relative">
          <h2 className=" max-md:text-left font-bold tracking-tighter lg:text-5xl  text-3xl mt-4 text-center bg-gradient-to-b from-black to-blue-500 bg-clip-text text-transparent">
            Sign up for free today
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-4 tracking-tight leading-7 max-md:text-left">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="star"
            priority
            className="absolute -right-36 -top-36 w-1/2 max-w-[300px] hidden md:block"
            style={{
              translateY: TranslateY,
              rotate: rotate,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="spring"
            priority
            className="absolute -left-[250px] -bottom-20 w-1/2 max-w-[300px] hidden md:block"
            style={{
              translateY: TranslateY,
              rotate: rotate,
            }}
          />
        </div>

        <div className="flex justify-center items-center mt-10">
          <SwipeButton
            className=""
            firstClass="bg-black text-white"
            firstText="Get for Free"
            secondClass="bg-white text-black"
            secondText="Get for Free"
          />
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
    </section>
  );
};
