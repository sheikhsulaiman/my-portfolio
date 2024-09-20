import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import Logo from "./logo";

const MobileNav = () => {
  return (
    <div className="flex flex-col justify-between items-start h-[95%] ">
      <div className="space-y-2">
        <Logo />
        <ul className="space-y-2">
          {siteConfig.mainNav.map((navItem) => (
            <li key={navItem.title}>
              <Link href={navItem.href}>
                <p className="text-2xl">{navItem.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Contact</h2>
        <ul>
          <li>
            <Link className="hover:underline" href={siteConfig.links.mail}>
              sheikhsulaimansony@outlook.com
            </Link>
          </li>
          <li className="hover:underline">
            <p>+880 19471 97174</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
