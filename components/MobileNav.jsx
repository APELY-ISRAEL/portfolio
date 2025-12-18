"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import LanguageSwitcher from "./selects/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const MobileNav = () => {
  const { t } = useTranslation();
  const links = [
    { name: t('navbar.home'), path: "/" },
    { name: t('navbar.services'), path: "/services" },
    { name: t('navbar.resume'), path: "/resume" },
    { name: t('navbar.work'), path: "/work" },
    { name: t('navbar.contact'), path: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-slate-100" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-16 mb-16 text-center text-2xl text-gray-100">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              I<span className="text-amber-100">.A</span>
            </h1>
          </Link>

        </div>
        <nav className="flex flex-col justify-center items-center gap-7">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`
                ${link.path === pathname
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-100"
                }
                text-xl capitalize hover:text-blue-600 transition-all
              `}
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
