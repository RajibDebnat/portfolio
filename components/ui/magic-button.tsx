import React, { Children } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
export default function MagicButton({title,position,icon}:{title:string,position:string,icon:React.ReactNode}) {
  return (
    <button className="relative inline-flex  h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-3 py-1  text-md max-sm:text-sm font-medium text-white backdrop-blur-3xl">
      {position === "left" && icon}
      {title}
      {/* {<FaLocationArrow/>} */}
      {position === "right" && icon}
    
      </span>
    </button>
  );
}
