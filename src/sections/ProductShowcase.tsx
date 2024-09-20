"use client";
import ProductImage from "@/assets/product-image.png";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ProductShowcase = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const TranslateY = useTransform(scrollYProgress, [0, 1], [250, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 45]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip ">
      <div className="container items-center justify-center flex flex-col">
        <div className=" max-w-[540px] text-center mx-auto">
          <div className="text-sm inline-flex px-3 py-1 tracking-tight border-gray-500 border-dotted border rounded-xl font-bold">
            Boost your productivity
          </div>
          <h2 className=" max-md:text-left font-bold tracking-tighter lg:text-5xl  text-3xl mt-4 text-center bg-gradient-to-b from-black to-blue-500 bg-clip-text text-transparent">
            A more effective way to track progress
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-4 tracking-tight leading-7 max-md:text-left">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10 flex justify-center items-center">
          <Image
            src={ProductImage}
            alt="Product Image"
            priority
            className="hidden md:block"
          />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid"
            priority
            className="absolute -right-36 -top-36 w-1/2 max-w-[300px] hidden md:block"
            style={{
              translateY: TranslateY,
              rotate: rotate,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube"
            priority
            className="absolute -left-36 -bottom-20 w-1/2 max-w-[300px] hidden md:block"
            style={{
              translateY: TranslateY,
              rotate: rotate,
            }}
          />
        </div>
      </div>
    </section>
  );
};
