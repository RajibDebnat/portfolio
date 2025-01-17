"use client";
import { projects } from "@/raw-data/gridItemsData";
import { PinContainer } from "./ui/3d-pin";
import { HoverEffect } from "./ui/card-hover-effect";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

import { motion } from "framer-motion";
import Image from "next/image";
import { transform } from "next/dist/build/swc/generated-native";
import { FaLocationArrow } from "react-icons/fa";
const RecentProjects = () => {
  console.log
  return (
    <div className=" relative z-30 pb-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="  text-purple">recent projects</span>
      </h1>

      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24  gap-y-16 mt-6">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" sm:h-[41rem]  sm:w-[570px] lg:min-h-[30.5rem] h-[25rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className= "  sm:w-[570px] sm:h-[40vh] relative flex justify-center   items-center w-[80vw] overflow-hidden h-[30vh]  mb-10">
                <div className=" relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src={"/bg.png"} alt="bg image" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="  z-10 absolute bottom-0"
                />
              </div>
              <h1 className=" font-bold  lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className=" lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className=" flex items-center justify-between mt-7 mb-3">
                <div className=" flex     items-center " >
                  {iconLists.map((icon,index) => {
                    console.log(icon)
                    return  <div key={icon} className="  bg-black    rounded-full   justify-center border border-white/[0.2] flex " style={{transform:`translateX(-${5*index*2}px)`}} >
                    <img src={icon}  alt="nothing" className='p-2'/>
                   
                      {/* <Image
                      width={100%}
                        src={icon}
                        alt={`${title} image`}
                        className=" p-2"
                      /> */}
                    </div>
})}
                </div>
                <div className=" flex justify-center items-center ">
                  <p className=" flex gap-4 lg:text-lg md:text-xs text-sm  text-purple ">Check Live Site  <FaLocationArrow/> </p>
                </div>
              </div>
              {/* {title} */}
            </PinContainer>
          </div>
        ))}
      </div>
      {/* <HoverEffect items={projects} /> */}
    </div>
  );
};

export default RecentProjects;

// <HeroHighlight>
// <motion.h1
//   initial={{
//     opacity: 0,
//     y: 20,
//   }}
//   animate={{
//     opacity: 1,
//     y: [20, -5, 0],
//   }}
//   transition={{
//     duration: 0.5,
//     ease: [0.4, 0.0, 0.2, 1],
//   }}
//   className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
// >
//   With insomnia, nothing&apos;s real. Everything is far away. Everything
//   is a{" "}
//   <Highlight className="text-black dark:text-white">
//     copy, of a copy, of a copy.
//   </Highlight>
// </motion.h1>
// </HeroHighlight>
