import Image from "next/image";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
}

export default function ProjectLogo({ onlyProjectLogo }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      {onlyProjectLogo ? null : (
        <>
          <Image src="/logo.png" alt="AWS Logo" width={50} height={50} />
          <Image
            src="/icons/v_bar.png"
            alt="Vertical bar"
            width={50}
            height={50}
          />
        </>
      )}
      <Image
        src="/amplify.png"
        alt="AWS Amplify Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
