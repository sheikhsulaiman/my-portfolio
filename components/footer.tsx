import Link from "next/link";

import { siteConfig } from "@/config/site";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <footer className="border-t-2 container mx-auto p-8">
      <div className="w-full flex items-center justify-between my-2">
        <Logo />
        <ModeToggle />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <ul className="w-full mb-4">
          {siteConfig.mainNav.map((navItem) => (
            <li key={navItem.title} className="ml-4">
              <Link href={navItem.href} className="text-2xl">
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex space-y-2 flex-col">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul>
              <li>
                <Link className="hover:underline" href={siteConfig.links.mail}>
                  sheikhsulaimansony@outlook.com
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href={siteConfig.links.mailSecondary}
                >
                  sonyedtech@gmail.com
                </Link>
              </li>
              <li className="hover:underline">
                <p>+880 19471 97174</p>
              </li>
            </ul>
          </div>
          <div className="space-y-2 mt-2">
            <h4 className="font-semibold text-center md:text-start">
              Follow Me
            </h4>
            <ul className="flex items-center justify-center md:justify-start gap-6">
              <li>
                <Link
                  href={siteConfig.links.github}
                  className="cursor-pointer hover:scale-105"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.linkedin}
                  className="cursor-pointer hover:scale-105"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.twitter}
                  className="cursor-pointer hover:scale-105"
                  target="_blank"
                >
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.instragram}
                  className="cursor-pointer hover:scale-105"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.facebook}
                  className="cursor-pointer hover:scale-105"
                  target="_blank"
                >
                  <FaFacebook size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
