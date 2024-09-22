import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href="/" className="h-6 w-6 md:h-auto md:w-auto">
        <Image
          priority
          src={"/favicon.ico"}
          width={32}
          height={32}
          alt="sonyed.tech"
        />
      </Link>
      <p className="font-space-grotesk pl-2 md:text-2xl border-l-2 border-brand">
        sony<span className="text-brand">ed</span>.tech
      </p>
    </div>
  );
};

export default Logo;
