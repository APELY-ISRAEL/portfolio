"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

const services = [
  {
    num: "01",
    title: t('services.title1'),
    description:
      t('services.description1'),
    href: "",
  },
  {
    num: "02",
    title: t('services.title2'),
    description:
      t('services.description2'),
    href: "",
  },
  {
    num: "03",
    title: t('services.title3'),
    description:
      t('services.description3'),
    href: "",
  },
  {
    num: "04",
    title: t('services.title4'),
    description:
      t('services.description4'),
    href: "",
  },
  {
    num: "05",
    title: t('services.title5'),
    description:
      t('services.description5'),
    href: "",
  },
  {
    num: "06",
      title: t('services.title6'),
    description:
      t('services.description6'),
    href: "",
  },
];


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
