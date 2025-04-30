import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/raw-data/gridItemsData";
function Grid() {
  return (
    <div className=" mb-20">

    <BentoGrid>
      {gridItems.map((items, i) => (
  
        <BentoGridItem
        key={items.id}
          title={items.title}
          className={items.className}
          description={items.description}
          img={items.img}
          imageClass = {items.imgClassName}
          titleClassName = {items.titleClassName}
          />
        ))}
    </BentoGrid>
        </div>
  );
}

export default Grid;

// const items = [
//   {
//     title: "hero is hero",
//     description: "hero is another hero",
//     id: "1",
//     className: "col-span-2  h-[400px] row-span-2",
//   },
//   {
//     title: "hero is hero",
//     description: "hero is another hero",
//     id: "2",
//     className: "col-span-2",
//   },
//   {
//     title: "hero is hero",
//     description: "hero is another hero",
//     id: "3",
//     className: "col-span-2",
//   },

// ];