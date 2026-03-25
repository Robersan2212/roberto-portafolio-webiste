"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import AboutPageLayout from "@/components/AboutPageLayout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X, ExternalLink, ZoomIn } from "lucide-react";

import chatbotImage from "../assets/projects/chatbot.webp";
import n8nImage from "../assets/projects/n8n.webp";
import fileTransferImage from "../assets/projects/file-transfer.webp";
import worforceImage from "../assets/projects/worforce.webp";
import rustSeeklogoImage from "../assets/projects/rust-seeklogo.webp";
import repoSpyImage from "../assets/projects/repo-spy.webp";
import { N8nLogoSplit } from "@/components/N8nLogoSplit";

type Project = {
  title: string;
  description: string;
  image: StaticImageData | string | null;
  link?: string;
  techStack?: string[];
  internal?: boolean;
  imageClassName?: string;
  showContactInfo?: boolean;
  /** Use "contain" for logos that should not be cropped (e.g. wide brand marks). */
  cardImageFit?: "cover" | "contain";
  /** SVG logo: white wordmark, colored symbol (e.g. n8n). */
  useN8nSplitLogo?: boolean;
  /** Override background for `cardImageFit: "contain"` strip (n8n split logo defaults to transparent). */
  cardImageAreaClassName?: string;
  /** Override inner logo box size for contain layout (Tailwind classes). */
  cardLogoContainClassName?: string;
};

function isPictureAsset(p: Project): boolean {
  return !!p.image && !p.useN8nSplitLogo && p.cardImageFit !== "contain";
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    title: "BYUI Support Agent",
    description: "A web-based AI support assistant built for BYU-Idaho to help students, faculty, and visitors with academic questions. Powered by OpenAI's GPT 5.2 model, the application provides contextual guidance through a web interactive graphical interface, featuring n8n orchestration and agent handoff for seamless workflow management. Developed collaboratively with a team of AI engineers and specialists.",
    image: chatbotImage,
    link: "https://n8n.byui.edu/webhook/8cd86003-1ddc-49f7-9b46-eabc70e58938/chat",
    techStack: ["React 18", "TypeScript", "FastAPI", "Python", "n8n", "OpenAI SDK", "OpenAI GPT 5.2", "Docker"],
    showContactInfo: true,
  },
  {
    title: "BYUI IT Internal Agent",
    description: "An AI agent designed to search indexed knowledge base articles and assist analysts during customer interactions and troubleshooting. Integrated with a LlamaIndex RAG pipeline that indexes knowledge base articles to Pinecone for efficient retrieval. The project leverages a web interactive graphical interface with an n8n AI agent backend and LlamaIndex RAG pipeline for orchestration and agent handoff.",
    image: n8nImage,
    link: undefined,
    techStack: ["n8n", "Python", "LlamaIndex", "Pinecone", "GPT 5.1"],
    internal: true,
    cardImageFit: "contain",
    useN8nSplitLogo: true,
  },
  {
    title: "File Transfer Client-Server",
    description: "A TCP-based file transfer application with a tkinter GUI client and a multi-threaded Python server. The server handles multiple client connections concurrently, stores file metadata and transfer logs in SQLite, and uses SHA256 hashes for integrity verification. Communication uses JSON-encoded messages over sockets. Built entirely with Python standard library modules—no external dependencies.",
    image: fileTransferImage,
    link: "https://github.com/Robersan2212/client-server",
    techStack: ["Python 3", "socket", "threading", "sqlite3", "hashlib", "json", "tkinter", "tkinter.ttk"],
    internal: false,
  },
  {
    title: "Workforce Console",
    description: "A command-line application for managing employee and department data with full CRUD operations. Employees are linked to departments through relationships. The app uses a layered architecture with a service layer (EmployeeService, DepartmentService) for business logic and Entity Framework Core for database access. Features input validation, structured exception handling, and SQLite as the backing store. Schema is managed via EF Core migrations.",
    image: worforceImage,
    link: "https://github.com/Robersan2212/workforce-console",
    techStack: ["C#", ".NET 10.0", "Entity Framework Core 9.0.7", "SQLite", "Microsoft.EntityFrameworkCore.Sqlite", "System.ComponentModel.DataAnnotations"],
    internal: false,
  },
  {
    title: "Web Scraper",
    description: "A web scraping tool built in Rust that uses CSS selectors to extract data from web pages and save it to CSV files. Developed as a learning project to master Rust fundamentals—variables, expressions, conditionals, loops, and functions. Uses reqwest for HTTP requests and the scraper crate for HTML parsing. Planned enhancements include scaling for JavaScript-heavy websites.",
    image: rustSeeklogoImage,
    link: "https://github.com/Robersan2212/rust-scrapper",
    techStack: ["Rust", "reqwest", "scraper", "csv", "clap", "rand", "regex", "log", "env_logger"],
    internal: false,
    imageClassName: "brightness-0 invert",
    cardImageFit: "contain",
    cardImageAreaClassName: "bg-zinc-900/70",
    cardLogoContainClassName: "h-9 w-24 sm:h-10 sm:w-28 md:h-11 md:w-32",
  },
  {
    title: "Repo-Spy",
    description: "A command-line tool built with TypeScript that fetches and displays GitHub repository statistics. Leverages the GitHub REST API to asynchronously retrieve key metrics—star count, forks, open issues, and primary language—and presents a formatted summary in the terminal. Developed to practice async/await, modular design with separation of concerns, and working with external APIs and JSON data in a strongly typed environment.",
    image: repoSpyImage,
    link: undefined,
    techStack: ["TypeScript", "Node.js", "Axios", "Commander.js", "Chalk", "GitHub REST API", "Jest", "ESLint", "ts-node"],
    internal: false,
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [picturePopoutOpen, setPicturePopoutOpen] = useState(false);

  useEffect(() => {
    setPicturePopoutOpen(false);
  }, [selectedProject?.title]);

  return (
    <AboutPageLayout>
      <main className="flex min-h-dvh w-full min-w-0 flex-col items-center px-3 pt-28 pb-8 sm:px-6 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-40 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="mb-10 font-sans text-2xl font-bold text-zinc-300 sm:mb-12 sm:text-3xl md:text-4xl">
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_PROJECTS.map((project, index) => (
              <Card
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="min-w-0 cursor-pointer touch-manipulation overflow-hidden border-white/20 bg-white/5 backdrop-blur-xl transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {project.image && (
                  <div
                    className={`relative aspect-video w-full overflow-hidden ${
                      project.cardImageFit === "contain"
                        ? project.cardImageAreaClassName ??
                          (project.useN8nSplitLogo
                            ? "bg-transparent"
                            : "bg-gradient-to-br from-violet-950/70 via-purple-950/50 to-violet-900/40")
                        : ""
                    }`}
                  >
                    {project.useN8nSplitLogo ? (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div
                          className={`relative ${
                            project.cardLogoContainClassName ??
                            "h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40"
                          }`}
                        >
                          <N8nLogoSplit />
                        </div>
                      </div>
                    ) : project.cardImageFit === "contain" ? (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div
                          className={`relative ${
                            project.cardLogoContainClassName ??
                            "h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40"
                          }`}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={`object-contain ${project.imageClassName ?? ""}`}
                            sizes="(max-width: 640px) 160px, 200px"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover ${project.imageClassName ?? ""}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>
                )}
                <CardHeader className="min-w-0">
                  <CardTitle className="break-words font-sans text-lg font-semibold text-zinc-300 sm:text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="min-w-0 break-words text-zinc-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
            setPicturePopoutOpen(false);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="inset-0 flex h-dvh max-h-dvh w-full min-w-0 max-w-[100dvw] translate-x-0 translate-y-0 flex-col overflow-hidden rounded-none border-0 bg-zinc-950 p-0 data-[state=open]:!animate-slide-in-from-left data-[state=closed]:!animate-slide-out-to-left [padding-left:env(safe-area-inset-left)] [padding-right:env(safe-area-inset-right)] [padding-bottom:env(safe-area-inset-bottom)]"
        >
          {selectedProject && (
            <div className="flex h-full max-h-dvh w-full min-w-0 flex-col overflow-hidden">
              <DialogHeader className="flex shrink-0 flex-row items-start justify-between gap-2 border-b border-white/20 px-3 py-3 sm:items-center sm:gap-4 sm:px-6 sm:py-4">
                <DialogTitle className="min-w-0 flex-1 break-words font-sans text-lg font-semibold leading-snug text-zinc-300 sm:text-xl md:truncate md:text-2xl md:leading-normal md:whitespace-nowrap">
                  {selectedProject.title}
                </DialogTitle>
                <DialogClose
                  className="shrink-0 rounded p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close preview"
                >
                  <X className="size-5 sm:size-6" />
                </DialogClose>
              </DialogHeader>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-3 sm:gap-6 sm:p-6">
                {selectedProject.image && (
                  <div className="relative mx-auto w-full min-w-0 max-w-5xl md:max-w-6xl">
                    {isPictureAsset(selectedProject) ? (
                      <div className="overflow-hidden rounded-lg">
                        <button
                          type="button"
                          onClick={() => setPicturePopoutOpen(true)}
                          className="group relative flex h-[min(46vh,360px)] w-full min-w-0 cursor-pointer touch-manipulation items-center justify-center overflow-hidden border-0 bg-zinc-900/30 p-0 text-left transition-[box-shadow] hover:ring-2 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:h-[min(54vh,520px)]"
                          aria-haspopup="dialog"
                          aria-label="Open larger image preview"
                        >
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            width={
                              typeof selectedProject.image === "string"
                                ? 444
                                : selectedProject.image.width
                            }
                            height={
                              typeof selectedProject.image === "string"
                                ? 120
                                : selectedProject.image.height
                            }
                            className={`max-h-full w-auto max-w-full object-contain ${selectedProject.imageClassName ?? ""}`}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                          />
                          <span
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-950/0 transition-colors duration-200 group-hover:bg-zinc-950/40 group-focus-visible:bg-zinc-950/40"
                            aria-hidden
                          >
                            <ZoomIn
                              className="size-9 text-zinc-100 opacity-0 drop-shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:size-10"
                              strokeWidth={1.75}
                            />
                          </span>
                        </button>
                      </div>
                    ) : (
                      <div
                        className={`relative flex h-[min(46vh,360px)] w-full min-w-0 items-center justify-center overflow-hidden rounded-lg md:h-[min(54vh,520px)] ${
                          selectedProject.useN8nSplitLogo
                            ? selectedProject.cardImageAreaClassName ??
                              "bg-transparent"
                            : selectedProject.cardImageAreaClassName
                              ? selectedProject.cardImageAreaClassName
                              : "bg-zinc-900/30"
                        }`}
                      >
                        {selectedProject.useN8nSplitLogo ? (
                          <div className="h-24 w-72 max-w-[90%] sm:h-28 sm:w-80 md:h-32 md:w-96">
                            <N8nLogoSplit />
                          </div>
                        ) : selectedProject.cardLogoContainClassName ? (
                          <div className="relative h-20 w-52 max-w-[85%] sm:h-24 sm:w-64 md:h-28 md:w-72">
                            <Image
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              fill
                              className={`object-contain ${selectedProject.imageClassName ?? ""}`}
                              sizes="(max-width: 640px) 240px, 320px"
                            />
                          </div>
                        ) : (
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            width={
                              typeof selectedProject.image === "string"
                                ? 444
                                : selectedProject.image.width
                            }
                            height={
                              typeof selectedProject.image === "string"
                                ? 120
                                : selectedProject.image.height
                            }
                            className={`max-h-full w-auto max-w-full object-contain ${selectedProject.imageClassName ?? ""}`}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
                <p className="break-words font-sans text-sm text-zinc-400 sm:text-base md:text-lg">
                  {selectedProject.description}
                </p>
                {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-sans text-base font-semibold text-zinc-300 sm:text-lg">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 font-sans text-xs text-zinc-400 sm:px-3 sm:py-1.5 sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedProject.internal && (
                  <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="break-words font-sans text-xs text-zinc-400 sm:text-sm">
                      <span className="font-semibold text-amber-200/90">Internal project.</span> This project is private. No source code, demos, or links are available for external access. For inquiries regarding this project, contact:
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 break-words font-sans text-xs text-zinc-400 sm:text-sm">
                      <li>Roberto Sanchez | AI Automation Developer — (208) 576-8451</li>
                      <li>Ron Vallejo | AI Solution Architect at Brigham Young University–Idaho — (208) 496-9002</li>
                    </ul>
                  </div>
                )}
                {selectedProject.showContactInfo && !selectedProject.internal && (
                  <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="break-words font-sans text-xs text-zinc-400 sm:text-sm">
                      For inquiries regarding this project, contact:
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 break-words font-sans text-xs text-zinc-400 sm:text-sm">
                      <li>Roberto Sanchez | AI Automation Developer — (208) 576-8451</li>
                      <li>Ron Vallejo | AI Solution Architect at Brigham Young University–Idaho — (208) 496-9002</li>
                    </ul>
                  </div>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 break-words font-sans text-xs font-medium text-zinc-300 underline decoration-zinc-500 underline-offset-2 transition-colors hover:text-zinc-200 hover:decoration-zinc-400 sm:text-sm"
                  >
                    Open project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {selectedProject &&
        selectedProject.image &&
        isPictureAsset(selectedProject) && (
          <Dialog open={picturePopoutOpen} onOpenChange={setPicturePopoutOpen}>
            <DialogContent
              showCloseButton={false}
              overlayClassName="z-[100]"
              className="z-[100] flex max-h-[96dvh] w-[calc(100dvw-1rem)] max-w-none flex-col gap-0 overflow-hidden border border-white/20 bg-zinc-950 p-0 shadow-2xl md:h-[min(76dvh,800px)] md:max-h-[min(82dvh,860px)] md:w-[min(96vw,1800px)] md:max-w-[min(96vw,1800px)] md:flex-row md:items-stretch"
            >
              <DialogClose
                className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-50 rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Close image preview"
              >
                <X className="size-5 sm:size-6" />
              </DialogClose>
              <DialogHeader className="flex shrink-0 flex-row items-start gap-3 border-b border-white/20 px-4 py-3 pr-14 pt-4 sm:items-center md:h-full md:w-52 md:max-w-[13rem] md:flex-col md:items-start md:justify-between md:gap-6 md:self-stretch md:border-b-0 md:border-r md:pr-4 md:py-5 lg:w-56 lg:max-w-[14rem]">
                <DialogTitle className="min-w-0 flex-1 break-words text-left font-sans text-sm font-medium leading-snug text-zinc-400 sm:text-base md:flex-1 md:leading-normal">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative flex min-h-0 flex-1 flex-col md:min-h-0 md:flex-1">
                <div className="relative min-h-[min(48dvh,420px)] w-full flex-1 md:min-h-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className={`object-contain object-center p-2 sm:p-3 md:p-4 ${selectedProject.imageClassName ?? ""}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1800px) 85vw, 1536px"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
    </AboutPageLayout>
  );
}
