import Image from "next/image";
import Link from "@/app/components/Link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectItem } from "./Project";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (project) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [project]);

  if (!project || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 flex h-screen w-screen items-center justify-center bg-black/40 p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl overflow-hidden rounded-3xl bg-secondary p-6 shadow-2xl transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-3 rounded-full bg-background p-2 text-secondary transition hover:bg-secondary/10"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-background">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-base leading-7 text-secondary">{project.description}</p>

              <div className="space-y-3 bg-background p-4 text-sm text-secondary">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/75">Stack</p>
                  <p className="mt-2 text-sm leading-6">{project.stack.join(" • ")}</p>
                </div>
                {project.link && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary/75">Website</p>
                    <Link href={project.link} className="text-primary underline">
                      {project.link}
                    </Link>
                  </div>
                )}
                {project.linkRepo && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary/75">Repository</p>
                    <Link href={project.linkRepo} className="text-primary underline">
                      {project.linkRepo}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-background">
              <div className="relative h-72 w-full">
                <Image
                  src={project.imagePrew}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
