"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { Approachs } from "@/raw-data/gridItemsData";
import { Button } from "./ui/moving-border";

function Approach() {
  return (
    <div className=" relative z-10">
      <h1 className="heading">
        My
        <span className=" text-purple"> Approach</span>
      </h1>

      <div className=" relative my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-7 px-20 max-sm:px-10  ">
        {Approachs.map(({ title, description, outerTitle }) => (
          <div key={title} className="  ">
            <MaskContainer
            
              revealText={
          

                <p className="  border   border-cyan-100 rounded-full  px-4 py-2 text-white-100 text-center  text-2xl font-semibold max-md:text-xl">
                  {outerTitle}
                </p>
                
              }
              className=" border rounded-2xl"
            >
              <div className=" flex  flex-col gap-3 p-6 ">
                <h3 className=" text-purple text-3xl font-bold max-md:text-3xl max-sm:2xl">
                  {title}
                </h3>
                <p className=" text-lg  font-normal ">{description}</p>
              </div>
            </MaskContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
