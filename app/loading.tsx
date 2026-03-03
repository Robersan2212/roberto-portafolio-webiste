import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-zinc-950">
      <Loader size="lg" />
      <p className="mt-4 font-sans text-sm text-zinc-400">Loading...</p>
    </div>
  );
}
