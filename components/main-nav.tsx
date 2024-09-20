import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const MainNav = () => {
  return (
    <header className="absolute top-0 left-0 right-0">
      <nav className="container flex items-center justify-between mx-auto p-4 border-b-2">
        <Logo />
        <ul className="flex items-center justify-center gap-6">
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
          <Button variant={"default"} className="rounded-full p-8 text-xl">
            Start a project <GoArrowUpRight className="ml-2 inline" />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default MainNav;
