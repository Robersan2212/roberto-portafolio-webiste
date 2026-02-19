"use client";

import AboutPageLayout from "@/components/AboutPageLayout";
import FadeContent from "@/components/FadeContent";
import PortraitFrame from "@/components/PortraitFrame";
import TextType from "@/components/TextType";

import portrait from "../assets/roberto-sanchez2.webp";

const BIO_TEXT =
  "My name is Roberto Sanchez. I'm originally from Chiapas, Mexico, and I am a lawful permanent resident of the United States. I work as an AI Automation Developer and am currently pursuing a degree in Software Engineering with an emphasis in Software Design at Brigham Young University–Idaho, with a projected graduation date of July 23, 2026. I'm passionate about AI development, full-stack development, system design, and cybersecurity. In my resume, you can explore my professional achievements from over five years in the IT industry. Below, you'll find the tech stack I'm proficient in and the certifications I hold.";

export default function AboutPage() {
  return (
    <AboutPageLayout>
      <main className="flex min-h-dvh w-full flex-col items-center justify-center px-4 pt-28 pb-8 sm:px-6 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-40 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
        <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
          {/* Portrait - 3rd in sequence */}
          <div className="shrink-0 aspect-[3/4] w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96">
            <FadeContent delay={600} duration={600} initialOpacity={0}>
              <PortraitFrame
                src={portrait}
                alt="Roberto Sanchez"
                aspect="portrait"
                className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96"
                objectPosition="center"
              />
            </FadeContent>
          </div>

          {/* Bio text - next to picture, centered */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-2xl space-y-6 text-center">
              <TextType
                text="About Me"
                as="h1"
                loop={false}
                showCursor={false}
                typingSpeed={30}
                className="font-sans text-2xl font-bold text-zinc-300 sm:text-3xl md:text-4xl"
              />
              <TextType
                text={BIO_TEXT}
                as="p"
                loop={false}
                showCursor={false}
                typingSpeed={5}
                initialDelay={300}
                className="font-sans text-lg leading-relaxed text-zinc-400 sm:text-xl md:text-2xl"
              />
              <FadeContent delay={900} duration={600} initialOpacity={0} className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="font-sans text-lg font-semibold text-zinc-300 sm:text-xl">
                  Tech Stack
                </h2>
                <p className="font-sans text-base text-zinc-400 sm:text-lg">
                  React, Next.js, Tailwind CSS, Python, TypeScript, n8n, Docker, Postgres, AWS
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="font-sans text-lg font-semibold text-zinc-300 sm:text-xl">
                  Certifications
                </h2>
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-sans text-base text-zinc-400 sm:text-lg">
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-500 underline-offset-2 transition-colors hover:text-zinc-300 hover:decoration-zinc-400"
                    >
                      CompTIA Security+
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-500 underline-offset-2 transition-colors hover:text-zinc-300 hover:decoration-zinc-400"
                    >
                      AWS Certified Cloud Practitioner
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-500 underline-offset-2 transition-colors hover:text-zinc-300 hover:decoration-zinc-400"
                    >
                      BYU-Idaho Computer Programming
                    </a>
                  </li>
                </ul>
              </div>
              </FadeContent>
            </div>
          </div>
        </div>
      </main>
    </AboutPageLayout>
  );
}
