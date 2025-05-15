import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ShimarButton from "./ui/Shimar-button";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "web apps",
  },
  {
    text: "with",
  },
  {
    text: "web.io",
    className: "text-blue-500 dark:text-blue-500",
  },
  { text: " Digital Agency" },
];

function Hero() {
  return (
    <div className=" pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full      h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className=" flex justify-center my-20 z-10 relative">
          <div className=" max-w-[89vw]  md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center  ">
            <p className=" text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">
            Alipurduar Best Website Development Agency
            </p>
            <TextGenerateEffect
              duration={1}
              words="Creat Responsive Websites For Businesses To Get More Customers"
              className="text-[70px] text-center  max-md:text-[40px] max-sm:text-[35px]"
              // otherClasses="  m"
            />
            <h2 className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Help Businesses To Reach More Customer with Online Presence
            </h2>
            <div className=" mt-8">


            {/* <TypewriterEffectSmooth words={words}/> */}
            <Link href="#projects" title="scrolling to about section">

          <ShimarButton title='Show my work' icon={<FaLocationArrow/>} position="right"/> 
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
