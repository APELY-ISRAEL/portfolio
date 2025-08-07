"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "lorem ioasdhc ahds",
    stack: [
      { name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "lorem ioasdhc ahds",
    stack: [
      { name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Backend",
    title: "project 2",
    description: "lorem ioasdhc as",
    stack: [
      { name: "Nextjs" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "Fullsatck",
    title: "project 3",
    description: "lorem ioasdhc",
    stack: [
      { name: "Nextjs" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {

    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
          order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50px]">

              <div className="text-8xl leading-none font-extralight text-transparent text-outline text-gray-600">
                {project.num}
              </div>


              <h2 className="text-[42px] font-bold leading-none text-slate-200 group-hover:text-blue-600 transition-all
              duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-gray-400">
                {project.description}
              </p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-blue-400">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-slate-300"></div>

              <div className=" flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-gray-700 flex justify-center items-center group hover:bg-blue-700 transition-all duration-300">
                        <BsArrowUpRight className="text-gray-400 text-3xl group-hover:text-slate-100 transition-colors duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </Link>


                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-gray-700 flex justify-center items-center group hover:bg-blue-700 transition-all duration-300">
                        <BsGithub className="text-gray-400 text-3xl group-hover:text-slate-100 transition-colors duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </Link>
              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>

                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-blue-600 hover:bg-blue-600-hover text-white text-[22px] w-[44px]
              h-[44px] flex justify-center items-center transition-all"/>

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;