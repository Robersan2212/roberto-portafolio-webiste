"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "motion/react";

interface ShinyHeroTextProps {
  line1: string;
  line2: string;
  line1ClassName?: string;
  line2ClassName?: string;
}

export default function ShinyHeroText({
  line1,
  line2,
  line1ClassName = "",
  line2ClassName = "",
}: ShinyHeroTextProps) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const color = "#6b6b6b";
  const shineColor = "#a3a3a3";
  const spread = 90;
  const speed = 4;
  const animationDuration = speed * 1000;

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    const cycleTime = elapsedRef.current % animationDuration;
    const p = (cycleTime / animationDuration) * 100;
    progress.set(p);
  });

  const backgroundPosition = useTransform(
    progress,
    (p) => `${150 - p * 2}% center`
  );

  const gradientStyle: React.CSSProperties = {
    fontFamily: "var(--font-geist-sans)",
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="flex min-w-0 max-w-full flex-col items-center gap-1.5 text-center sm:gap-2">
      <motion.h1
        className={`break-words font-sans font-bold tracking-tight ${line1ClassName}`}
        style={{ ...gradientStyle, backgroundPosition }}
      >
        {line1}
      </motion.h1>
      <motion.p
        className={`break-words font-sans font-medium ${line2ClassName}`}
        style={{ ...gradientStyle, backgroundPosition }}
      >
        {line2}
      </motion.p>
    </div>
  );
}
