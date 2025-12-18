"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from '@/components/ui/theme-toggle';
import { useTranslation } from 'react-i18next';


const Nav = () => {
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
    <nav className="flex gap-8">
      {/* <ThemeToggle /> */}
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`
            ${link.path === pathname
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-slate-100"
            }
            capitalize font-medium hover:text-blue-600 transition-all
          `}
        >
          {link.name}
        </Link>
      ))}

    </nav>
  );
};

export default Nav;
