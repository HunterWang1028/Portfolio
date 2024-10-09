"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects, skills } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import React from "react";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer title={link} href={link} className=" p-3">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div
        className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-10 pt-10
      "
      >
        {skills.map((skill) => (
          <div key={skill.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img src={skill.img} alt={skill.name} className="md:w-10 w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
