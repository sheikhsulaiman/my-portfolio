"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return theme === "dark" ? (
    <Link href="/">
      <Image
        src={"/images/logo_dark.png"}
        height={75}
        width={200}
        alt="sonyed.tech"
      />
    </Link>
  ) : (
    <Link href="/">
      <Image
        src={"/images/logo_light.png"}
        height={75}
        width={200}
        alt="sonyed.tech"
      />
    </Link>
  );
};

export default Logo;
