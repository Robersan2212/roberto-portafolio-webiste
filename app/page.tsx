import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import DarkVeil from "@/components/DarkVeil";
import HeroText from "@/components/HeroText";

import portrait from "./assets/Roberto Sanchez.webp";

export default function Home() {
  return (
    <div className="relative min-h-dvh w-full sm:min-h-screen">
      <div className="fixed inset-0 -z-10 bg-zinc-950">
        <DarkVeil speed={0.5} />
      </div>
      <main className="flex min-h-dvh w-full flex-col items-center justify-center gap-6 px-4 py-8 sm:min-h-screen sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:-translate-y-8 lg:gap-12 lg:px-12 xl:-translate-y-12">
        <AnimatedContent
          direction="vertical"
          reverse={false}
          distance={40}
          duration={0.7}
          delay={1.8}
          initialOpacity={0}
          triggerOnMount
          className="relative aspect-square h-36 w-36 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
        >
          <Image
            src={portrait}
            alt="Roberto Sanchez"
            fill
            className="object-cover object-[center_10%]"
            sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, (max-width: 1024px) 176px, (max-width: 1280px) 224px, 256px"
            priority
          />
        </AnimatedContent>
        <HeroText />
        <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full cursor-pointer rounded-full border-white/30 bg-white/10 px-6 font-sans text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white sm:w-auto sm:text-base"
          >
            About Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full cursor-pointer rounded-full border-white/30 bg-white/10 px-6 font-sans text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white sm:w-auto sm:text-base"
          >
            Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full cursor-pointer rounded-full border-white/30 bg-white/10 px-6 font-sans text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white sm:w-auto sm:text-base"
          >
            Contact Me
          </Button>
        </div>
      </main>
    </div>
  );
}
