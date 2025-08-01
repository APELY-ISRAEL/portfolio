"use client"
import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about=[
 {
  title:'About me',
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus blanditiis et veritatis reprehenderit atque placeat officia, quidem quo est nisi asperiores omnis dolorum. Distinctio eaque placeat harum facilis ut!",
  info:[
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
const Resume = () => {
  return (
    <div>Resume page</div>
  )
}

export default Resume;