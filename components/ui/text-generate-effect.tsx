"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  otherClasses
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  otherClasses?:string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.h1 ref={scope}>
        {wordsArray.map((word, idx) => {
            console.log(idx)
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.h1>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className={` dark:text-white text-black  leading-snug tracking-wide ${otherClasses}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
