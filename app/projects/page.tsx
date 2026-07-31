import { Metadata } from "next";
import type { ProjectItem } from "./components/Project";
import ProjectList from "./components/ProjectList";

import jwtToolkitLogo from "public/projects/jwt-toolkit/jwt-toolkit-logo.svg";
import jwtToolkit from "public/projects/jwt-toolkit/jwt-toolkit.png";
import syncoLogo from "public/projects/synco/synco-logo.svg";
import synco from "public/projects/synco/synco.png";
import iso8583AnalyzerLogo from "public/projects/iso8583-analyzer/iso8583-analyzer-logo.svg";
import iso8583Analyzer from "public/projects/iso8583-analyzer/iso8583-analyzer.png";

export const metadata: Metadata = {
  title: "Projects | Lazaro Campos",
  description:
    "Explore projects built by Lazaro Campos, including Java, Spring Boot, TypeScript, and full-stack tools for monitoring, authentication, and developer productivity.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Lazaro Campos",
    description:
      "Explore projects built by Lazaro Campos, including Java, Spring Boot, TypeScript, and full-stack tools for monitoring, authentication, and developer productivity.",
    url: "https://lazxdev.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Lazaro Campos",
    description:
      "Explore projects built by Lazaro Campos, including Java, Spring Boot, TypeScript, and full-stack tools for monitoring, authentication, and developer productivity.",
  },
};

const projectsList: ProjectItem[] = [
  {
    title: "Synco",
    description: "Self-hosted advanced uptime monitoring for developers.",
    stack: ["NestJs", "TypeScript", "Telegram Bot API", "Docker" ,"SQLite"],
    logo: syncoLogo,
    imagePrew: synco,
    linkRepo: "https://github.com/lazxdev/synco",
    link: "https://synco-project.vercel.app",
  },
  {
    title: "ISO8583 Analyzer",
    description: "A professional web application for parsing, visualizing, and comparing ISO 8583 financial transaction messages.",
    stack: ["React", "TypeScript", "Vite"],
    logo: iso8583AnalyzerLogo,
    imagePrew: iso8583Analyzer,
    linkRepo: "https://github.com/lazxdev/iso8583-analyzer",
    link: "https://iso8583-analyzer.vercel.app",
  },
  {
    title: "JWT Toolkit",
    description: "Lightweight, open-source web application to decode, code, and explore JSON Web Tokens (JWT) from your browser.",
    stack: ["React", "TypeScript", "Web Crypto Api"],
    logo: jwtToolkitLogo,
    imagePrew: jwtToolkit,
    linkRepo: "https://github.com/lazxdev/Jwt-Toolkit",
    link: "https://jwtoolkit.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">Projects</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I enjoy building projects that solve real-world problems and help me grow as a developer. 
            Each one is an opportunity to explore new technologies, refine my skills, 
            and turn ideas into reliable software.
          </p>
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <ProjectList projects={projectsList} />
        </div>
      </div>
    </div>
  );
}
