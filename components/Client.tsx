import { testimonials } from "@/raw-data/gridItemsData"
import { Cover } from "./ui/cover"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"



function Client() {
  return (
    <section className=" w-[95vw] py-10" id="testimonials">
     <h1 className="heading  ">Kind Words From
     <Cover>Satisfied Clients</Cover> </h1>
     {/* <p className=" text-white-200"> hello world</p> */}
     <div className="  mt-10 flex  items-center justify-center">
     

      <InfiniteMovingCards  speed="slow"      direction="right"   className=""   items={testimonials}/>
 
     </div>
    </section>
  )
}

export default Client