"use client"
import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

const about = [
  {
    title: 'About me',
    description: "  Loreitatisilis ut!",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Israel APELY"
      },
      {
        fieldName: "Phone",
        fieldValue: "+228 93737007"
      },
      {
        fieldName: "Experience",
        fieldValue: "12+ Years"
      },
      {
        fieldName: "Teams",
        fieldValue: "israel.01"
      },
      {
        fieldName: "Nationality",
        fieldValue: "Togolaise"
      },
      {
        fieldName: "Email",
        fieldValue: "israelapely.gmail.com"
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available"
      },
      {
        fieldName: "Languages",
        fieldValue: "French, English"
      },
    ]
  }
]

const experience = {
  icon: '/asset/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ",
  items: [
    {
      company: "Easy Service",
      position: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Easy Summer",
      position: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Easy Tech",
      position: "Full Stack Developer",
      duration: "2025 - present",
    },
  ],
};

const education = {
  icon: '/asset/resume/badge.svg',
  title: 'My education',
  description: "Loremddff",
  items: [
    {
      institution: "Easy Service",
      degree: "Full Stack Developer",
      duration: "2025",
    },
    {
      institution: "Easy Service",
      degree: "Full Stack Developer",
      duration: "2025",
    },
    {
      institution: "Easy Service",
      degree: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      institution: "Easy Service",
      degree: "Full Stack Developer",
      duration: "2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "  Lorem ipsummnruum?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiFigma />,
      name: 'figma',
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h=[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[60px] text-black/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return(
                        <li key={index} 
                        className="bg-[#232329]/40 h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-blue-700">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white/90">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-600"></span>
                            <p className="text-black/40">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


             <TabsContent value="education" className="w-full">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[60px] text-black/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return(
                        <li key={index} 
                        className="bg-[#232329]/40 h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-blue-700">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white/90">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-600"></span>
                            <p className="text-black/40">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


             <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/40 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) =>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232339]/50 rounded-xl flex
                        justify-center items-center group">
                          <div className="text-6xl group-hover:text-blue-600 transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                        </TooltipProvider>
                        </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


             <TabsContent value="about" className="w-full text-center xl:text-left"
             >
               <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-black/80 mx-auto xl:mx-0">
                {about[0].description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about[0].info.map((item, index) =>{
                    return(
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black/70">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
               </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume;