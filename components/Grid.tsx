import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Grid = () => {
  return (
    <section id="project">
      <TextGenerateEffect
        className=" text-center text-[40px] md:text-3xl lg:text-5xl pb-5"
        words="Main project"
      />
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
