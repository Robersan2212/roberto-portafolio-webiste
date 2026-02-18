import DarkVeil from "@/components/DarkVeil";

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden sm:min-h-screen">
      <div className="fixed inset-0 -z-10 bg-zinc-950">
        <DarkVeil speed={0.5} />
      </div>
      {children}
    </div>
  );
}
