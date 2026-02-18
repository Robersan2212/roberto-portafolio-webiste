import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface PortraitFrameProps {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  objectPosition?: string;
  aspect?: "square" | "portrait";
}

export default function PortraitFrame({
  src,
  alt,
  className,
  objectPosition = "center",
  aspect = "square",
}: PortraitFrameProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/20 sm:rounded-3xl",
        aspect === "portrait" ? "aspect-[3/4]" : "aspect-square",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 384px"
      />
    </div>
  );
}
