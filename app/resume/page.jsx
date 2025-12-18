"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaPhp, FaCode, FaReact, FaMouse } from "react-icons/fa";
import { SiTailwindcss, SiAndroidstudio, SiFigma, SiNextdotjs, SiLaravel, SiDjango, SiSolidity, SiGit, SiMysql, SiPostgresql, SiMongodb, SiPycharm } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  const about = [
    {
      title: t('resume.title6'),
      description: "Passionate and dedicated developer with a keen interest in creating innovative digital solutions. Always eager to learn new technologies and improve skills to deliver high-quality projects. Adaptable and proactive, ready to take on new challenges.",
      info: [
        { fieldName: t('resume.Name'), fieldValue: "Israel APELY" },
        { fieldName: t('resume.Phone'), fieldValue: "+228 93737007" },
        { fieldName: t('resume.Experience'), fieldValue: "2 Years" },
        { fieldName: t('resume.Teams'), fieldValue: "israel.01" },
        { fieldName: t('resume.Nationality'), fieldValue: "Togolaise" },
        { fieldName: t('resume.Email'), fieldValue: "israelapely@gmail.com" },
        { fieldName: t('resume.Freelance'), fieldValue: "Available" },
        { fieldName: t('resume.Languages'), fieldValue: "French, English" },
      ]
    }
  ];

  const experience = {
    icon: '/asset/resume/badge.svg',
    title: t('resume.title1'),
    description: t('resume.experience'),
    items: [

      {
        company: t('resume.exp1_title'),
        position: t('resume.exp1_desc'),
        duration: "2025",
        details: t('resume.exp1_desc'),
      },

      {
        company: t('resume.exp2_title'),
        position: t('resume.exp2_desc'),
        duration: "2025",
        details: t('resume.exp2_desc'),
      },
      {
        company: t('resume.exp4_title'),
        position: t('resume.exp4_desc'),
        duration: "2025",
        details: t('resume.exp4_desc'),
      },

      {
        company: t('resume.exp3_title'),
        position: t('resume.exp3_desc'),
        duration: "2024",
        details: t('resume.exp3_desc'),
      },



      {
        position: t('resume.exp5_title'),
        company: t('resume.exp5_desc'),
        duration: "2024",
        details: t('resume.exp5_desc'),
      },

      {
        position: t('resume.exp6_title'),
        company: t('resume.exp6_desc'),
        duration: "2023",
        details: t('resume.exp6_desc'),
      },

      {
        company: t('resume.exp7_title'),
        position: t('resume.exp7_desc'),
        duration: "2022",
        details: t('resume.exp7_desc'),
      },
    ],
  };

  const education = {
    icon: '/asset/resume/badge.svg',
    title: t('resume.title2'),
    description: t('resume.summary'),
    items: [
      {
        institution: t('resume.educ1'),
        degree: t('resume.educ2'),
        duration: "2025 - Present"
      },

      {
        institution: t('resume.educ3'),
        degree: t('resume.educ4'),
        duration: "2021 - 2024"
      },

      {
        institution: t('resume.educ5'),
        degree: t('resume.educ6'),
        duration: "2020 - 2021"
      },

      {
        institution: t('resume.educ5'),
        degree: t('resume.educ8'),
        duration: "2019 - 2020"
      }
    ],
  };

  const skills = {
    title: t('resume.title3'),
    description: t('resume.desc3'),
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
      { icon: <SiSolidity />, name: t('resume.skill11') },
      { icon: <FaReact />, name: t('resume.skill12') },
    ],
  };

  const tools = {
    title: t('resume.title4'),
    description: t('resume.desc4'),
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
    title: t('resume.title5'),
    description: t('resume.desc5'),
    databaselist: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  };






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
            <TabsTrigger value="experience">{t('resume.tab1')}</TabsTrigger>
            <TabsTrigger value="education">{t('resume.tab2')}</TabsTrigger>
            <TabsTrigger value="skills">{t('resume.tab3')}</TabsTrigger>
            <TabsTrigger value="tools">{t('resume.tab4')}</TabsTrigger>
            <TabsTrigger value="databases">{t('resume.tab5')}</TabsTrigger>
            <TabsTrigger value="about">{t('resume.tab6')}</TabsTrigger>
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
                            <p className="capitalize text-white">{skill.name}</p>
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
                            <p className="capitalize text-white">{tl.name}</p>
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
                            <p className="capitalize text-white">{db.name}</p>
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
