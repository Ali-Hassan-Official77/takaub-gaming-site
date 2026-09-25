import Image from "next/image";
import Link from "next/link";
export default function BrandLogo() {
  return <Link href="/" className="brand-mark" aria-label="TAKAGHUB home">
    <Image src="/logo.svg" alt="TAKAGHUB" width={190} height={48} priority unoptimized />
  </Link>;
}