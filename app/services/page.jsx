"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
   {
    num: "01",
    title: "Web Development",
    description:
      "Designing and building high-performance, responsive websites using modern technologies to ensure a smooth user experience across all browsers and desktop devices.",
    href: "",
  },
  {
    num: "02",
    title: "API Development and Integration",
    description:
      "Designing and implementing robust, secure APIs to ensure seamless communication between various applications and services. Integrating third-party solutions to optimize processes and enhance system connectivity",
    href: "",
  },
  {
    num: "03",
    title: "Maintenance & Technical Support",
    description:
      "Provide ongoing maintenance for applications and websites to ensure smooth operation, fix bugs, apply security updates, and enhance features according to evolving user needs.",
    href: "",
  },
  {
    num: "04",
    title: "SEO & Performance Optimization",
    description:
      "Enhancing natural search ranking through technical optimizations: loading speed, site structure, meta tags, optimized images, and content organization. Goal: better positioning in search engines and faster navigation.",
    href: "",
  },
  {
    num: "05",
   title: "Mobile Development (Coming Soon)",
    description:
      "Currently learning and developing skills to build native and cross-platform mobile applications that offer seamless performance and user-friendly interfaces.",
    href: "",
  },
   {
    num: "06",
    title: "Blockchain Development (Coming Soon)",
    description:
      "Currently learning, exploring, and developing decentralized applications (dApps), smart contracts, and blockchain-based solutions to enhance transparency, security, and innovation in digital services.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-slate-100 group-hover:text-blue-600 transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-semibold leading-none text-slate-100 group-hover:text-blue-600 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-gray-400">{service.description}</p>
                <div className="border-b border-gray-700 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
