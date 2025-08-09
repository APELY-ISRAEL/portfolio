"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaPhp, FaCode, FaMouse } from "react-icons/fa";
import { SiTailwindcss, SiAndroidstudio, SiFigma, SiNextdotjs, SiLaravel, SiFlutter, SiDjango, SiSolidity, SiGit, SiMysql, SiPostgresql, SiMongodb, SiPycharm } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = [
  {
    title: 'About me',
    description: "Passionate and dedicated developer with a keen interest in creating innovative digital solutions. Always eager to learn new technologies and improve skills to deliver high-quality projects. Adaptable and proactive, ready to take on new challenges.",
    info: [
      { fieldName: "Name", fieldValue: "Israel APELY" },
      { fieldName: "Phone", fieldValue: "+228 93737007" },
      { fieldName: "Experience", fieldValue: "2 Years" },
      { fieldName: "Teams", fieldValue: "israel.01" },
      { fieldName: "Nationality", fieldValue: "Togolaise" },
      { fieldName: "Email", fieldValue: "israelapely@gmail.com" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Languages", fieldValue: "French, English" },
    ]
  }
];

const experience = {
  icon: '/asset/resume/badge.svg',
  title: 'My experience',
  description: "Lorem",
  items: [

    {
      company: "Personal Project",
      position: "Car Stock Management Website",
      duration: "2025",
      details: "Full design and development of the system."
    },

    {
      company: "Génie en Herbe Contest",
      position: "Coach",
      duration: "2025",
      details: "Coaching and preparing school teams."
    },

    {
      company: "Personal Project",
      position: "QR Code Voting Web Application",
      duration: "2025",
      details: "Secure and intuitive interface with real-time statistics integration."
    },

    {
      company: "IT Club",
      position: "President",
      duration: "2024 - 2025",
      details: "Organized activities and supervised members."
    },

    {
      company: "Easy Service",
      position: "Full Stack Developer",
      duration: "2025 - present"
    },

    {
      company: "Personal Project",
      position: "School Library Management Application",
      duration: "2024",
      details: "Tracking loans, organizing documents, and improving learning experience."
    },

    {
      company: "NTFS",
      position: "IT Internship",
      duration: "2024",
      details: "Participation in projects and technical maintenance."
    },

    {
      company: "School Committee",
      position: "Activity Coordinator",
      duration: "2024",
      details: "Event organization and project coordination."
    },

    {
      company: "Server Configuration",
      position: "Ubuntu, Apache, PHP & MySQL Installation and Setup",
      duration: "2024",
      details: "Deployment environment for web applications."
    },

    {
      position: "Group Project - Identity Authentication System via Blockchain",
      company: "University",
      duration: "2024",
      details: "Developed a secure identity authentication platform using blockchain technology, focusing on decentralized verification and data protection."
    },

    {
      position: "Group Project - Personal Blog Platform",
      company: "University",
      duration: "2023",
      details: "Designed and implemented a blog system with user authentication, post creation, and comment management features."
    },

    {
      company: "Personal Project",
      position: "Car Rental Web Application Development",
      duration: "2022",
      details: "Management of vehicles, clients, and bookings via admin and client interfaces."
    },
  ],
};

const education = {
  icon: '/asset/resume/badge.svg',
  title: 'My Education',
  description: "Academic background and professional journey in software development.",
  items: [
    {
      institution: "IT Consulting Firm EASY SERVICES",
      degree: "Application Developer",
      duration: "2025 - Present"
    },

    {
      institution: "Notre Dame School of Administration and Management",
      degree: "Bachelor's Degree in Information Technology Management",
      duration: "2021 - 2024"
    },

    {
      institution: "Chaminade High School of Kara",
      degree: "High School Diploma - Second Part, Science Series D",
      duration: "2020 - 2021"
    },

    {
      institution: "Chaminade High School of Kara",
      degree: "High School Diploma - First Part, Science Series D",
      duration: "2019 - 2020"
    }
  ],
};

const skills = {
  title: "My skills",
  description: "Before mastering any framework, I focus on programming fundamentals. Currently, I work with several frameworks and technologies, some of which I am still learning, such as React Native, Flutter, and Solidity.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "TailwindCss" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },

    { icon: <SiFigma />, name: 'figma' },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiNextdotjs />, name: "Next.js" },

    // En cours d'apprentissage
    { icon: <SiSolidity />, name: "Solidity (Blockchain en cours)" },
    { icon: <SiFlutter />, name: "React Native (en cours)" },
  ],
};

const tools = {
  title: "Tools & Editors",
  description: "Tools and editors I use daily to code efficiently.",
  toolslist: [
    // Remplacer ces lignes :
    { icon: <FaCode />, name: "Visual Studio Code" },
    { icon: <FaMouse />, name: "Cursor" },
    { icon: <SiPycharm />, name: "PyCharm" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiGit />, name: "Git" },
  ],
};

const databases = {
  title: "Databases",
  description: "Databases I work with or learn.",
  databaselist: [
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ],
};





const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-slate-900"
    >
      <div className="container mx-auto text-slate-100">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Editor</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full mb-6">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index}
                        className="bg-slate-800 h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-blue-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-slate-100">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-400"></span>
                          <p className="text-gray-400">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full mb-6">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index}
                        className="bg-slate-800 h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-blue-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-slate-100">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-400"></span>
                          <p className="text-gray-400 mt-10">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full mb-6">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-slate-800 rounded-xl flex justify-center items-center group">
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
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="w-full h-full mb-6">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{tools.title}</h3>
                  <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{tools.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tools.toolslist.map((tl, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-slate-800 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-blue-600 transition-all duration-300">
                              {tl.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{tl.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>



            <TabsContent value="databases" className="w-full h-full mb-6">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{databases.title}</h3>
                  <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{databases.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {databases.databaselist.map((db, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-slate-800 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-blue-600 transition-all duration-300">
                              {db.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{db.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{about[0].description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about[0].info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-gray-400">{item.fieldName}</span>
                      <span className="text-xl text-slate-100">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
