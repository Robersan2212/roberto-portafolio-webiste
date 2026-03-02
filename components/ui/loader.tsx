import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-8 border-2",
  md: "size-12 border-2",
  lg: "size-16 border-[3px]",
};

export function Loader({ className, size = "md" }: LoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "rounded-full border-zinc-600/40 border-t-purple-500 border-r-purple-400/60 animate-spin",
        sizeClasses[size],
        className
      )}
    />
  );
}
