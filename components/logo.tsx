import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          className="dark:hidden"
          src={"/images/logo_dark.png"}
          height={75}
          width={200}
          alt="sonyed.tech"
        />
      </Link>
      <Link href="/">
        <Image
          className="hidden dark:block"
          src={"/images/logo_light.png"}
          height={75}
          width={200}
          alt="sonyed.tech"
        />
      </Link>
    </div>
  );
};

export default Logo;
