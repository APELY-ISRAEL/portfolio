"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  // ❌ PAS de t() ici
  const projects = [
    {
      num: "01",
      category: "Fullstack",
      titleKey: "work.work1_title",
      descKey: "work.work1_desc",
      stack: [{ name: "PHP" }, { name: "Laravel" }, { name: "Tailwind CSS" }],
      image: "/assets/work/ports.png",
      live: "",
      github: "https://github.com/APELY-ISRAEL?tab=repositories",
    },
    {
      num: "02",
      category: "Fullstack",
      titleKey: "work.work2_title",
      descKey: "work.work2_desc",
      stack: [{ name: "Python" }, { name: "Django" }, { name: "PostgreSQL" }],
      image: "/assets/work/default.png",
      live: "",
      github: "https://github.com/APELY-ISRAEL/blog",
    },
    {
      num: "03",
      category: "Fullstack",
      titleKey: "work.work3_title",
      descKey: "work.work3_desc",
      stack: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Shadcn" },
        { name: "Prisma" },
      ],
      image: "/assets/work/rate-me.png",
      live: "https://rate-me-web-app-six.vercel.app/",
      github: "https://github.com/APELY-ISRAEL/RateMe_Web_app",
    },
    {
      num: "04",
      category: "Fullstack",
      titleKey: "work.work4_title",
      descKey: "work.work4_desc",
      stack: [{ name: "Laravel" }, { name: "MySQL" }, { name: "Bootstrap" }],
      image: "/assets/work/biblio.png",
      live: "",
      github: "https://github.com/APELY-ISRAEL/Projet_biblio",
    },
    {
      num: "10",
      category: "Fullstack",
      titleKey: "work.work5_title",
      descKey: "work.work5_desc",
      stack: [{ name: "PHP" }, { name: "Laravel" }, { name: "MySQL" }],
      image: "/assets/work/client.png",
      live: "",
      github: "",
    },
    {
      num: "11",
      category: "Blockchain",
      titleKey: "work.work6_title",
      descKey: "work.work6_desc",
      stack: [{ name: "Solidity" }, { name: "Ethereum" }, { name: "React" }],
      image: "/assets/work/default.png",
      live: "",
      github: "https://github.com/APELY-ISRAEL/Authentification-Blockchain",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-slate-900"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl font-extralight text-transparent text-outline text-white/70">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold text-slate-200 capitalize">
                {project.category} {t("work.project")}
              </h2>

              <p className="text-gray-200">
                {t(project.descKey)}
              </p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-400">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-slate-300" />

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-gray-700 flex justify-center items-center hover:bg-blue-700 transition-all">
                          <BsArrowUpRight className="text-3xl text-gray-400 group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("work.live_project")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full border border-gray-700 flex justify-center items-center hover:bg-blue-700 transition-all">
                          <BsGithub className="text-3xl text-gray-400 group-hover:text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("work.github_repository")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max"
                btnStyles="bg-blue-600 text-white w-[44px] h-[44px] flex justify-center items-center"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
