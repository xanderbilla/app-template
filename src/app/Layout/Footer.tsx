import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full h-20 flex flex-col md:flex-row items-center justify-between gap-4">
      <ProjectLogo />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg md:text-2xl">AWS Amplify Gen 2</h3>
        <p className="text-sm md:text-xs text-center">
          &copy; 2024, Amazon Web Services, Inc. and its affiliates.
        </p>
        <p className="text-sm md:text-xs text- opacity-50">
          Developed by <Link className="underline" href="https://xanderbilla.com">Xander Billa</Link>
        </p>
      </div>
    </div>
  );
}
