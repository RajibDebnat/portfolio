import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialMedia } from "@/raw-data/gridItemsData";
import { CiLocationArrow1 } from "react-icons/ci";
import MagicButton from "./ui/magic-button";
function Footer() {
  return (
    <footer className="   z-[-3]  w-full pt-20 pb-10" id="contact">
      <div className=" w-full absolute left-0  -bottom-96 max-sm:bottom-0    min-h-96">
        <Image
          className=" w-full h-full opacity-50"
          src={"/footer-grid.svg"}
          alt=" grid"
          width={100}
          height={100}
        />
      </div>
      <div className=" relative z-20 flex flex-col items-center justify-center  w-full">
        <h1 className=" heading w-[45vw] max-sm:w-[65vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to next level?
        </h1>
        <p className=" text-white-200 md:mt-10 my-5"></p>
        <Link href={"mailto:rajibfreelancing@gmail.com"}>
          <MagicButton
            title=" Let's get in touch "
            icon={<CiLocationArrow1 />}
            position="right"
          />
        </Link>
      </div>
      <div className="  mt-5">
        
        <div
          className=" flex mt-5  justify-center items-center
         gap-5"
        >
          {socialMedia.map((media) => (
            <div className="  relative z-50" key={media.id}>

            <Link
 target="_blank"
key={media.id}
href={`${media?.link}`}
>
              <Image className="cursor-pointer" src={media.img} alt="github" width={25} height={2} />
            </Link>
              </div>
          ))}
        </div>
        <p className=" mt-5  font-light   text-sm text-center">
          Copyright &#169; 2025 Rajib Debnath
        </p>
      </div>
    </footer>
  );
}

export default Footer;
