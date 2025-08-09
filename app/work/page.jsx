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
    category: "Fullstack",
    title: "Car Rental Web App",
    description: "Development of a car rental web application with management of vehicles, clients, and bookings through both admin and client interfaces.",
    stack: [
      { name: "PHP" }, { name: "Laravel" }, { name: "Tailwind CSS" }
    ],
    image: "/assets/work/ports.png",
    live: "",
    github: "https://github.com/APELY-ISRAEL?tab=repositories",
  },

  {
    num: "02",
    category: "Fullstack",
    title: "Blog Platform (Group Project)",
    description: "Flexible platform for content publishing, reader interaction, and audience growth, developed as a group project.",
    stack: [
      { name: "Python" }, { name: "Django" }, { name: "PostgreSQL" }
    ],
    image: "/assets/work/default.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "QR Code Voting App",
    description: "Innovative application allowing users to scan QR codes to vote anonymously, featuring a secure interface and real-time statistics.",
    stack: [
      { name: "React" }, { name: "Next.js" }, { name: "Shadcn" }, { name: "Prisma" }
    ],
    image: "/assets/work/rate-me.png",
    live: "https://rate-me-web-app-six.vercel.app/",
    github: "https://github.com/APELY-ISRAEL/RateMe_Web_app",
  },

  {
    num: "04",
    category: "Fullstack",
    title: "Library Management System",
    description: "Application de gestion de bibliothèque scolaire pour le suivi des emprunts et organisation des documents, améliorant l'expérience d'apprentissage.",
    stack: [
      { name: "Laravel" }, { name: "MySQL" }, { name: "Bootstrap" }
    ],
    image: "/assets/work/biblio.png",
    live: "",
    github: "",
  },
  {
    num: "10",
    category: "Fullstack",
    title: "Car Stock Management Website",
    description: "Design and development of a car stock management website to improve tracking and sales.",
    stack: [
      { name: "PHP" }, { name: "Laravel" }, { name: "MySQL" }
    ],
    image: "/assets/work/client.png",
    live: "",
    github: "",
  },

  {
    num: "11",
    category: "Blockchain",
    title: "Identity Authentication System via Blockchain (Group Project)",
    description: "Projet de groupe visant à créer un système d'authentification d'identité sécurisé utilisant la technologie blockchain.",
    stack: [
      { name: "Solidity" }, { name: "Ethereum" }, { name: "React" }
    ],
    image: "/assets/work/default.png",
    live: "",
    github: "",
  },
];

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

              <p className="text-gray-200">
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