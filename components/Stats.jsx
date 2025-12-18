"use client";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Stats = () => {
    const { t } = useTranslation(); // 🔹 useTranslation hook à l'intérieur du composant
  
    const stats = [
      {
        num: 2,
        text: t("home.experience"),
      },
      {
        num: 15,
        text: t("home.projects"),
      },
      {
        num: 8,
        text: t("home.technologies"),
      },
      {
        num: 100,
        text: t("home.commits"),
      },
    ];



    return (<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex gap-4 items center justify-center
                    xl:justify-start"
                            key={index}
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold text-slate-100"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                } leading-snug text-slate-300`}>
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    )
}

export default Stats