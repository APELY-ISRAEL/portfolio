"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from '@/components/ui/theme-toggle';

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
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
