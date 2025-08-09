import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from '@/components/ui/LanguageToggle'

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-slate-900 text-slate-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            I.<span className="text-amber-100">A</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Hire me
            </Button>
          </Link>
            <LanguageToggle />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
