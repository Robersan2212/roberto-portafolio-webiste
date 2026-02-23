"use client";

import { useRef, useEffect, useState } from "react";
import AboutPageLayout from "@/components/AboutPageLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

function AutoResizeTextarea({
  className,
  onInput,
  ...props
}: React.ComponentProps<"textarea">) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const MIN_HEIGHT = 240;
  const MAX_HEIGHT = 640;

  const adjustHeight = () => {
    const textarea = ref.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    const newHeight = Math.min(
      Math.max(textarea.scrollHeight, MIN_HEIGHT),
      MAX_HEIGHT
    );
    textarea.style.height = `${newHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <textarea
      ref={ref}
      onInput={(e) => {
        adjustHeight();
        onInput?.(e);
      }}
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 min-h-16 w-full max-w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "resize-none overflow-x-hidden",
        className
      )}
      {...props}
    />
  );
}

const EMAIL = "san20086@byui.edu";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setIsLeaving(false);
      setTimeout(() => setIsLeaving(true), 1700);
      setTimeout(() => {
        setCopied(false);
        setIsLeaving(false);
      }, 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setIsLeaving(false);
      setTimeout(() => setIsLeaving(true), 1700);
      setTimeout(() => {
        setCopied(false);
        setIsLeaving(false);
      }, 2000);
    }
  };

  return (
    <AboutPageLayout>
      <main className="flex min-h-dvh w-full flex-col items-center justify-center px-4 pt-28 pb-8 sm:px-6 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-40 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
        <Card className="w-full max-w-md border-white/20 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="font-sans text-2xl font-bold text-zinc-300">
              Contact Me
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Send me a message and I&apos;ll get back to you.
            </CardDescription>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>Email: {EMAIL}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-300"
                aria-label="Copy email"
              >
                <Copy size={14} />
              </button>
              {copied && (
                <span
                  className={`text-xs text-zinc-400 ${
                    isLeaving ? "animate-slide-out-to-icon" : "animate-slide-in-from-icon"
                  }`}
                >
                  Copied
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <form className="grid w-full gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName" className="text-zinc-300">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  className="min-w-0 overflow-x-auto border-white/20 bg-white/5 text-zinc-300 placeholder:text-zinc-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className="text-zinc-300">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  className="border-white/20 bg-white/5 text-zinc-300 placeholder:text-zinc-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-zinc-300">
                  Message
                </Label>
                <AutoResizeTextarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={10}
                  className="min-w-0 max-w-full break-words border-white/20 bg-white/5 text-zinc-300 placeholder:text-zinc-500"
                />
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </AboutPageLayout>
  );
}
