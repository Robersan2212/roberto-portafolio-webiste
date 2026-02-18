import AboutPageLayout from "@/components/AboutPageLayout";
import AnimatedContent from "@/components/AnimatedContent";
import PortraitFrame from "@/components/PortraitFrame";

import portrait from "../assets/roberto-sanchez2.webp";

export default function AboutPage() {
  return (
    <AboutPageLayout>
      <main className="relative min-h-dvh w-full px-4 pt-28 pb-8 sm:px-6 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-40 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
        {/* Portrait - top left, near center */}
        <div className="absolute left-16 top-40 sm:left-24 sm:top-44 md:left-32 md:top-48 lg:left-40 lg:top-52 xl:left-48 xl:top-56 2xl:left-56 2xl:top-60">
          <AnimatedContent
            direction="vertical"
            reverse={false}
            distance={40}
            duration={0.7}
            delay={0.3}
            initialOpacity={0}
            triggerOnMount
          >
            <PortraitFrame
            src={portrait}
            alt="Roberto Sanchez"
            aspect="portrait"
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96"
            objectPosition="center"
          />
          </AnimatedContent>
        </div>

        {/* Bio text - centered in the middle, padding to avoid image overlap */}
        <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center pl-64 sm:pl-72 md:pl-80 lg:pl-96 xl:pl-[28rem] 2xl:pl-[32rem]">
          <div className="max-w-2xl space-y-6 text-center">
            <h1 className="font-sans text-2xl font-bold text-zinc-400 sm:text-3xl md:text-4xl">
              About Me
            </h1>
            <p className="font-sans text-base leading-relaxed text-zinc-500 sm:text-lg md:text-xl">
              Software Engineer passionate about building impactful applications.
            </p>
          </div>
        </div>
      </main>
    </AboutPageLayout>
  );
}
