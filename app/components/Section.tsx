"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  heading: string | ReactNode;
  headingAlignment?: "right" | "left";
  children: ReactNode;
};

export default function Section({
  heading,
  headingAlignment,
  children,
}: SectionProps) {
  return (
    <section
      className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
      id={typeof heading === "string" ? heading.toLowerCase().replace(/\s/g, "-") : undefined}
    >
      <h2
        className={clsx(
          "shrink-0 text-secondary md:w-32",
          headingAlignment === "right" && "md:text-right",
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
