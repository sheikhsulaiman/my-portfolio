import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/favicon.ico"} height={45} width={45} alt="sonyed.tech" />
    </Link>
  );
};

export default Logo;
