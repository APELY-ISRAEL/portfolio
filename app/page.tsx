"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();
  return (
    <section className="conatiner h-full bg-slate-900 text-slate-100">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-gray-400">{t('home.title')}</span>
            <h1 className="h1 mb-6 text-[4.3rem]">
            {t('home.greeting')}<br /><span className="text-amber-100">Israel APELY</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-slate-100">
            {t('home.description')}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/Cv_APELY.pdf" // chemin vers ton CV dans le dossier public
                download="Cv_APELY.pdf" // nom du fichier téléchargé
              >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-gray-700 hover:bg-blue-700 hover:text-white transition duration-300"
              >
                <span className="text-gray-300"> {t('home.cta')}</span>
                <FiDownload className="text-xl text-slate-300" />
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-gray-700 rounded-full flex justify-center items-center text-slate-300 text-base hover:bg-blue-700 hover:text-white transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
