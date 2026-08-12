import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import xetidLogo from "public/work/xetid-logo.jpg";

import HV from "public/gallery/havana.jpg";
import me from "public/gallery/me.png";
import Greeting from "./components/Greeting";

export const metadata: Metadata = {
  title: "About | Lazaro Campos",
  description:
    "Learn more about Lazaro Campos, a backend developer from Cuba focused on Java, Spring Boot, software architecture, and building reliable digital products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Lazaro Campos",
    description:
      "Learn more about Lazaro Campos, a backend developer from Cuba focused on Java, Spring Boot, software architecture, and building reliable digital products.",
    url: "https://lazxdev.vercel.app/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Lazaro Campos",
    description:
      "Learn more about Lazaro Campos, a backend developer from Cuba focused on Java, Spring Boot, software architecture, and building reliable digital products.",
  },
};

export default async function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={HV}
            alt={"havana"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={me}
            alt={"me"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Lazaro Campos, a Backend Developer from Cuba, 
              passionate about building scalable systems and solving complex problems through clean, reliable code.
            </p>
            <p>
              My career has been driven by a strong interest in backend development and software architecture.  
              I primarily work with Java and Spring Boot, building APIs and backend systems backed by relational databases and modern cloud technologies.  
              I&apos;m particularly interested in designing software that is maintainable, scalable, and built to evolve.
            </p>
            <p>
              Beyond my day job, I enjoy building open-source projects, 
              experimenting with new ideas, and continuously learning about software architecture, 
              distributed systems, and developer tools. I also create content where I document my journey 
              as a backend developer, share what I&apos;m learning, and talk about technology with the goal of helping 
              other developers grow.
            </p>
            <p>
              When I&apos;m away from my keyboard, you&apos;ll probably find me reading about new technologies, 
              planning my next side project, or enjoying a good cup of coffee while sketching out new ideas.
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in backend engineering with Java and Spring Boot, 
              building scalable APIs, designing clean architectures, and working with modern cloud technologies. 
              But there&apos;s always something new to learn. Here are some of the places I&apos;ve worked.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Junior Backend Developer",
    company: "Xetid",
    date: "2023 -",
    imageSrc: xetidLogo,
    link: "https://www.xetid.cu",
  },
];
