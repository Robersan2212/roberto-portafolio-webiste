"use client";

import { useState, useEffect } from "react";
import TextType from "@/components/TextType";
import ShinyHeroText from "@/components/ShinyHeroText";

/** Typing duration: "Roberto Sanchez" (14 chars × 60ms) + "Software Engineer" (900ms delay + 17 chars × 50ms) ≈ 1.8s */
const TYPING_DURATION_MS = 1900;

export default function HeroText() {
  const [showShiny, setShowShiny] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowShiny(true), TYPING_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (showShiny) {
    return (
      <ShinyHeroText
        line1="Roberto Sanchez"
        line2="Software Engineer"
        line1ClassName="text-lg text-zinc-400 sm:text-xl md:text-2xl lg:text-3xl"
        line2ClassName="text-3xl text-zinc-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-1.5 text-center font-sans sm:gap-2">
      <TextType
        text="Roberto Sanchez"
        as="h1"
        loop={false}
        typingSpeed={60}
        showCursor={false}
        className="font-sans text-lg font-bold text-zinc-400 sm:text-xl md:text-2xl lg:text-3xl"
      />
      <TextType
        text="Software Engineer"
        as="p"
        loop={false}
        typingSpeed={50}
        initialDelay={900}
        showCursor={false}
        className="font-sans text-3xl font-medium text-zinc-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      />
    </div>
  );
}
