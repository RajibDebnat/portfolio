import { workExperience } from "@/raw-data/gridItemsData";
import { Button } from "./ui/moving-border";
import Image from "next/image";
function Experience() {
  return (
    <section className=" py-20" id="experience">
      <h1 className="heading">
        My <span className=" text-purple">Work Experience</span>
      </h1>
      <div className=" w-full mt-12 grid lg:grid-cols-4 sm:grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 1000}
            key={card.title + index}
            className=" flex text-white border-neutral-250 dark:border-slate-800"
          >
            <div className=" flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={30}
                height={30}
                className=" lg:w-32 md:w-20 w-16"
              />
              <div className=" lg:ms-5">
                <h1 className=" text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className=" text-start font-semibold text-white-100 mt-3">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Experience;
