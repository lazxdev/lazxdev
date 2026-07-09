import React from "react";
import Image, { StaticImageData } from "next/image";

type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  logo: string | StaticImageData;
  imagePrew: string | StaticImageData;
  linkRepo?: string;
  link?: string;
};

type PostProps = {
  project: ProjectItem;
  onClick: () => void;
};

export default function Project({ project, onClick }: PostProps) {
  const { title, logo } = project;

  return (
    <li className="group cursor-pointer rounded-3xl bg-secondary/70 p-4 transition duration-300 hover:bg-secondary/90" onClick={onClick}>
      <div className="flex items-center gap-5">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-background">
          <Image src={logo} alt={`${title} logo`} fill className="object-cover" />
        </div>
        <span className="font-medium text-primary">{title}</span>
      </div>
    </li>
  );
}

export type { ProjectItem };
