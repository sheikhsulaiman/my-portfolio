import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { siteConfig } from "@/config/site";
const Hero = () => {
  return (
    <section className="min-h-screen mx-4 flex flex-col justify-center md:max-w-screen-md md:mx-auto">
      <Image
        src={"/images/profile.png"}
        height={150}
        width={150}
        className="rounded-full"
        alt="Picture of the author"
      />
      <h1 className="text-4xl font-bold mt-6">{siteConfig.hero.title}</h1>
      <div className="space-y-1 mt-12">
        <h3 className="text-2xl">{siteConfig.hero.subTitle}</h3>
        <div className="flex gap-1 items-center">
          <LuMapPin size={18} />
          <p className="text-md text-center sm:text-left">
            {siteConfig.hero.location}
          </p>
        </div>
      </div>
      <hr className="border-brand mt-1" />
      <div className=" grid grid-cols-12 md:gap-14 mt-8">
        <div className="col-span-12 md:col-span-7 md:space-y-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-wrap">{siteConfig.hero.about}</p>
        </div>
        <div className="hidden md:flex md:col-span-5 space-y-2  flex-col">
          <div className="flex-1">
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
          <div>
            <ul className="flex items-center justify-start gap-6">
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
      <div className="grid place-items-center">
        <p className="absolute bottom-8 text-xl text-center opacity-50">
          scroll down to explore
        </p>
        <FaChevronDown className="absolute bottom-4 opacity-50 wheel" />
      </div>
    </section>
  );
};

export default Hero;
