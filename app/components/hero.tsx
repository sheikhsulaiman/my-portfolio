import { MapPinHouseIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
          <MapPinIcon size={18} />
          <p className="text-md text-center sm:text-left">Dhaka, Bangladesh</p>
        </div>
      </div>
      <hr className="border-brand mt-1" />
      <div className=" grid grid-cols-12 md:gap-14 mt-8">
        <div className="col-span-12 md:col-span-7 md:space-y-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-wrap">
            I'm a <span className="underline">Freelance Developer</span> and a
            student of
            <span> Educational Technology</span>. I create websites and apps
            that help organizations address business challenges and meet their
            needs.
          </p>
        </div>
        <div className="hidden md:block md:col-span-5 space-y-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul>
            <li className="hover:underline hover:text-brand">
              <a href="mailto:sheikhsulaimansony@outlook.com">
                sheikhsulaimansony@outlook.com
              </a>
            </li>
            <li className="hover:text-brand">+880 19471 97174</li>
            <li className="hover:underline hover:text-brand">
              <Link href="https://sonyed.tech">https://sonyed.tech</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
