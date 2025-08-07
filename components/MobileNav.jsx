"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import ThemeToggle from '@/components/ui/theme-toggle';

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" }
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-slate-100" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-20 text-center text-2xl text-gray-100">
          logo
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Isra <span className="text-amber-100">.</span>
            </h1>
          </Link>
          
        </div>
        <nav className="flex flex-col justify-center items-center gap-7">
           <ThemeToggle />
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`
                ${
                  link.path === pathname
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-100"
                }
                text-xl capitalize hover:text-blue-600 transition-all
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
