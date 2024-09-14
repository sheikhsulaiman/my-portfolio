import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
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
      <h1 className="text-4xl font-bold mt-6">Sheikh Sulaiman Sony</h1>
      <div className="space-y-1 mt-12">
        <h3 className="text-2xl text-yellow-50">Web & App Developer</h3>
        <div className="flex gap-1 items-center text-yellow-100">
          <LuMapPin size={18} />
          <p className="text-md text-center sm:text-left">Dhaka, Bangladesh</p>
        </div>
      </div>
      <hr className="border-brand mt-1" />
      <div className=" grid grid-cols-12 md:gap-14 mt-8">
        <div className="col-span-12 md:col-span-7 md:space-y-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-wrap">
            I&apos;m a <span className="underline">Freelance Developer</span>{" "}
            and a student of
            <span> Educational Technology</span>. I create websites and apps
            that help organizations address business challenges and meet their
            needs. I speak English, Bengali, and Japanese.
          </p>
        </div>
        <div className="hidden md:flex md:col-span-5 space-y-2  flex-col">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul>
              <li>
                <Link
                  className="hover:underline hover:text-brand"
                  href="mailto:sheikhsulaimansony@outlook.com"
                >
                  sheikhsulaimansony@outlook.com
                </Link>
              </li>
              <li className=" hover:text-brand">
                <p>+880 19471 97174</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-start gap-6">
              <li>
                <Link
                  href="https://github.com/sheikhsulaiman"
                  className="hover:text-brand cursor-pointer"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/sheikh-sulaiman/"
                  className="hover:text-brand cursor-pointer"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>

              <li>
                <Link
                  href="https://twitter.com/sulaiman7473"
                  className="hover:text-brand cursor-pointer"
                  target="_blank"
                >
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/sheikh.sulaiman.sony/"
                  className="hover:text-brand cursor-pointer"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/Sheikh.Sulaiman.Sony/"
                  className="hover:text-brand cursor-pointer"
                  target="_blank"
                >
                  <FaFacebook size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
