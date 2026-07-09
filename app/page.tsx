import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "@/app/components/Link";

export default function Home() {

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, Lazaro here!
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I&apos;m a Backend Developer from Cuba building scalable applications with Java and Spring Boot. 
            On the side, I create content about software engineering, technology, and my journey as a developer.
          </p>
          <a
            href="/CV.pdf"
            download
            className="inline-flex animate-in items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary no-underline transition hover:bg-tertiary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Download CV
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </a>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://instagram.com/lazx.dev"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Instagram
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lázaro-campos-858864298/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="mailto:lazaromanuel65@gmail.com"
          >
            Email
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
