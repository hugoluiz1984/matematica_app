"use client";

import { usePathname } from "next/navigation";
import { Link } from "next/link";

export function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname(link.href);

        return (
          <Link
            className={isActive ? "text-black" : "text-gray"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
