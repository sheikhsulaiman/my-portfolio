import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { LuAlignJustify } from "react-icons/lu";

import { GoArrowUpRight } from "react-icons/go";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md">
      <nav className="container flex items-center justify-between mx-auto px-2 lg:p-4 border-b-2">
        <Button variant={"ghost"} size={"icon"} asChild className="lg:hidden">
          <SheetTrigger>
            <LuAlignJustify className="w-6 h-6" />
          </SheetTrigger>
        </Button>
        <Logo />
        <ul className="hidden lg:flex items-center justify-center gap-6">
          {siteConfig.mainNav.map((navItem) => (
            <li key={navItem.title}>
              <Link href={navItem.href}>
                <Button variant={"ghost"} className="rounded-full p-8 text-xl">
                  {navItem.title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/start-a-project">
          <Button
            variant={"default"}
            className="rounded-full p-4 lg:p-8 lg:text-xl"
          >
            Start a project <GoArrowUpRight className="ml-2 inline" />
          </Button>
        </Link>

        <SheetContent side={"left"}>
          <MobileNav />
        </SheetContent>
      </nav>
    </header>
  );
};

export default MainNav;
