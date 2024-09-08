import Footer from "@/app/Layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
        Welcome to Amplify Gen 2
      </h1>
      <Image
        src="/amplify-bg.png"
        alt="AWS Amplify Logo"
        width={600}
        height={600}
        className="rounded-md shadow-2xl"
      />
    </main>
  );
}
