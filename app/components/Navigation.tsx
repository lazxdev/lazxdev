"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/projects",
    title: "Projects",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="hidden shrink-0 text-primary md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 375 375"
            version="1.2"
          >
            <defs>
              <clipPath id="clip1">
                <path d="M 0 0 L 375 0 L 375 375 L 0 375 Z" />
              </clipPath>
            </defs>
            <g id="surface1">
              <g clipPath="url(#clip1)" clipRule="nonzero">
                <g transform="translate(187.5, 187.5) scale(1.3) translate(-187.5, -187.5)">
                  <path
                    fill="currentColor"
                    transform="scale(0.73329) translate(9.525, 22.225)"
                    d="M 173.89131,106.97915 l 1.27925,-0.004 c 31.19878,-0.10025 57.16811,28.98244 57.13422,58.3475 L 232.1172,327.8446 c -0.006,5.41186 -3.67314,8.93216 -8.58129,9.50459 -0.75437,0.088 -2.33046,0.0486 -3.0287,0.0426 -24.2225,-0.2101 -56.35258,-22.22704 -56.36052,-58.00791 l -0.0361,-162.63603 c -0.001,-5.92635 4.36214,-9.76869 9.78058,-9.76869 z M 246.965,328.34458 l 0.065,-49.53635 c 0.007,-5.11619 4.13092,-9.20817 9.24713,-9.21653 l 45.83305,-0.0749 c 31.04572,-0.0507 58.70811,28.0014 58.12404,58.11435 l -0.0182,0.94007 c -0.0992,5.11525 -4.13094,9.22678 -9.24713,9.21654 l -94.78097,-0.18969 c -5.1162,-0.0102 -9.22961,-4.13729 -9.22289,-9.2535 z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>

        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${pathname === link.path ? "text-primary" : "text-secondary"
                } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
