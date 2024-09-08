import ProjectLogo from "@/app/components/ProjectLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-20 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <Link
        href="https://github.com/xanderbilla/next-amplify-gen2"
        target="_blank"
      >
        <Image src="/icons/github.svg" alt="Menu" width={36} height={36} />
      </Link>
      {/* Nav Menu here... */}
    </div>
  );
}
