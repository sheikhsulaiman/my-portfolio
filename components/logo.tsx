import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="bg-primary-foreground rounded-md">
        <Image
          src={"/images/logo.png"}
          height={75}
          width={200}
          alt="sonyed.tech"
        />
      </div>
    </Link>
  );
};

export default Logo;
